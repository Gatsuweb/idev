import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '../../../lib/mdx';
import Image from "next/image";
import remarkGfm from 'remark-gfm';
import styles from '@/app/styles/Post.module.css'

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
    metadataBase: new URL('https://idevstudio.fr'),
    title: `${post.frontmatter.title} | Nom de votre blog`,
    description: post.frontmatter.description || 'Découvrez cet article sur notre blog.',
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description || 'Découvrez cet article sur notre blog.',
      images: post.frontmatter.image ? [post.frontmatter.image] : ['/default-image.jpg'],
      type: 'article',
      publishedTime: post.frontmatter.date || new Date().toISOString(),
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
    const { frontmatter, content } = getPostBySlug(slug);
  
  return (
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
                  href={`/blog/tag/${tag}`}
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
    </div>
  );
}