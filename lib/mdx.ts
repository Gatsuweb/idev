import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPosts() {
  const files = fs.readdirSync(contentDirectory);
  
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(contentDirectory, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug: file.replace('.mdx', ''),
        frontmatter: data,
        content
      };
    })
    .sort((post1, post2) => {
      const date1 = new Date(post1.frontmatter.date);
      const date2 = new Date(post2.frontmatter.date);
      return date2.getTime() - date1.getTime();
    });
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    frontmatter: data,
    content
  };
}

export function getAllTags() {
    const posts = getAllPosts();
    const tagsSet = new Set<string>();
    
    posts.forEach(post => {
      const tags = post.frontmatter.tags || [];
      tags.forEach((tag: string) => tagsSet.add(tag));
    });
    
    return Array.from(tagsSet);
  }
  
  export function getPostsByTag(tag: string) {
    const allPosts = getAllPosts();
    return allPosts.filter(post => 
      post.frontmatter.tags && post.frontmatter.tags.includes(tag)
    );
  }