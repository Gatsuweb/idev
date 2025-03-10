// app/api/unsubscribe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const subscribers = await prisma.subscriber.findMany();
    return NextResponse.json(subscribers, { status: 200 });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ message: "Erreur serveur", error: String(error) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();     
    const email = formData.get('email');
    
    if (!email) {
      return NextResponse.json({ 
        message: "Email requis" 
      }, { status: 400 });
    }

    // Vérifier si l'abonné existe
    const subscriber = await prisma.subscriber.findUnique({
      where: {
        email: String(email),
      },
    });

    if (!subscriber) {
      return NextResponse.json({ 
        message: "Abonné non trouvé" 
      }, { status: 404 });
    }

    // Supprimer l'abonné
    const deletedSub = await prisma.subscriber.delete({
      where: {
        email: String(email),
      },
    });

    return NextResponse.json({ 
      message: "Désabonnement réussi",
      subscriber: deletedSub
    }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'abonnement:", error);
    return NextResponse.json({ 
      message: "Erreur lors de la suppression de l'abonnement", 
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}