import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTags, getPostsByTag } from "@/lib/mdx";
import { Nav } from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import styles from "@/app/styles/Post.module.css";

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  return { title: "Articles : " + tag, robots: { index: false, follow: true } };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  if (!posts.length) notFound();
  return (
    <>
      <Nav />
      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Articles : {tag}</h1>
          <Link href="/blog">Tous les articles</Link>
        </header>
        <div className={styles.relatedGrid}>
          {posts.map((post) => (
            <Link key={post.slug} className={styles.relatedCard} href={"/blog/" + post.slug}>
              <h2 className={styles.relatedCardTitle}>{post.frontmatter.title}</h2>
              <p className={styles.relatedCardExcerpt}>{post.frontmatter.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
