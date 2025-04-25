import Link from 'next/link';
import { getAllPosts, getAllTags } from '../../lib/mdx';
import styles from '@/app/styles/Blog.module.css';
import { Nav } from '../components/Nav';

export default function BlogIndex() {
  const posts = getAllPosts();
  const tags = getAllTags();
  
  return (
    <>
             <Nav />
    <div className={styles.container}>
        
      <div className={styles.header}>
        <h1 className={styles.title}>Blog I&apos;Dev studio</h1>
      </div>
      
      {/* Section des tags */}
      <div className={styles.tagsSection}>
        <h2 className={styles.tagsTitle}>Tags:</h2>
        <div className={styles.tagsContainer}>
          {tags.map(tag => (
            <Link 
              key={tag}
              href={`/blog/tag/${tag}`}
              className={styles.tagLink}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
      
      <div className={styles.postsList}>
        {posts.map(post => (
          <article key={post.slug} className={styles.postItem}>
            <h2 className={styles.postTitle}>
              <Link href={`/blog/${post.slug}`}>
                {post.frontmatter.title}
              </Link>
            </h2>
            <p className={styles.postDate}>
              {new Date(post.frontmatter.date).toLocaleDateString()}
            </p>
            <p className={styles.postExcerpt}>{post.frontmatter.excerpt}</p>
            
            {/* Afficher les tags de l'article */}
            {post.frontmatter.tags && (
              <div className={styles.postTags}>
                {post.frontmatter.tags.map((tag: string) => (
                  <Link 
                    key={tag}
                    href={`/blog/tag/${tag}`}
                    className={styles.postTag}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
            
            <Link 
              href={`/blog/${post.slug}`}
              className={styles.readMore}
            >
              Lire la suite
            </Link>
          </article>
        ))}
      </div>
    </div>
    </>
  );
}