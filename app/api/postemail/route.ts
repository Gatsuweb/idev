// pages/api/postemail.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
    const comptabilite = await prisma.subscriber.findMany();
    return NextResponse.json(comptabilite, { status: 200 });
    }
    catch (error) {
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
          message: "email requis" 
        }, { status: 400 });
      }
      const newSub = await prisma.subscriber.create({ 
        data: {
          email: String(email),
        },
      });
  
      return NextResponse.json({ 
        sub: newSub
      }, { status: 201 });
    } catch (error) {
      console.error("Erreur lors de la création du rendez-vous:", error);
      return NextResponse.json({ 
        message: "Erreur lors de la création du rendez-vous", 
        error: error instanceof Error ? error.message : String(error)
      }, { status: 500 });
    }
  }