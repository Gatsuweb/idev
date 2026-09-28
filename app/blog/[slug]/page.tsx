import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '../../../lib/mdx';
import Image from "next/image";
import remarkGfm from 'remark-gfm';
import styles from '@/app/styles/Post.module.css'
import pageStyles from "@/app/page.module.css";
import { Nav } from "@/app/components/Nav";
import { Footer } from "@/app/components/Footer";
import { Projets } from "@/app/components/Projets";
import { Contact } from "@/app/components/Contact";
import { notFound } from "next/navigation";

// Définir les paramètres statiques pour les routes
export async function generateStaticParams() {
  const posts = getAllPosts();
  
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description || post.frontmatter.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description || post.frontmatter.excerpt,
      images: post.frontmatter.image ? [post.frontmatter.image] : ['/preview.jpg'],
      type: 'article',
      publishedTime: post.frontmatter.date,
    },
  };
}

// Définition des types pour les props des composants MDX
type MDXComponentProps = {
  children?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

// Composants que vous pouvez utiliser dans vos fichiers MDX
const components = {
  h1: (props: MDXComponentProps) => <h1 {...props} />,
  h2: (props: MDXComponentProps) => <h2 {...props} />,
  Image,
  div: (props: MDXComponentProps) => {
    // Pour le composant personnalisé dans votre exemple MDX
    if (props.className === 'bg-blue-100 p-4 rounded-lg') {
      return <div className={styles.customComponent} {...props} />;
    }
    return <div {...props} />;
  },
  // Ajoutez d'autres composants personnalisés ici
};

export default async function BlogPost({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
    const post = getPostBySlug(slug);
    if (!post) notFound();
    const { frontmatter, content } = post;
    const relatedPosts = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);
  
  return (
    <>
      <div className={pageStyles.bgImg}>
        <Image
          src="/sand.jpg"
          alt="texture"
          className={pageStyles.texture}
          width={3500}
          height={2500}
          style={{ opacity: 0.1 }}
        />
      </div>
      <Nav />
      <div className={styles.container}>
        <article>
          <div className={styles.header}>
            <h1 className={styles.title}>{frontmatter.title}</h1>
            <p className={styles.date}>
              {new Date(frontmatter.date).toLocaleDateString()}
            </p>
            
            {frontmatter.tags && (
              <div className={styles.tags}>
                {frontmatter.tags.map((tag: string) => (
                  <Link 
                    key={tag}
                    href={`/blog/tag/${encodeURIComponent(tag)}`}
                    className={styles.tag}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <div className={styles.content}>
            <MDXRemote
              source={content}
              components={components}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>Lire aussi</h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.relatedCard}>
                  <p className={styles.relatedCardTitle}>{p.frontmatter.title}</p>
                  {p.frontmatter.excerpt && (
                    <p className={styles.relatedCardExcerpt}>{p.frontmatter.excerpt}</p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <Projets />
      <div className={styles.postContact} id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
