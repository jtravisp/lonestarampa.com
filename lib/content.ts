import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content');

/** Return all instrument slugs that have an .mdx file (excluding universal) */
export async function getInstrumentSlugs(): Promise<string[]> {
  const files = await fs.readdir(contentDir);
  return files
    .filter((f) => f.endsWith('.mdx') && f !== 'universal.mdx')
    .map((f) => f.replace(/\.mdx$/, ''));
}

/**
 * Load an MDX file.  
 * – Returns `{ content, frontMatter }` when the file exists  
 * – Returns `null` when the file is missing (so callers can skip it)  
 * – Propagates any other error (syntax, permission, etc.)
 */
export async function getContent(slug: string) {
  const fullPath = path.join(contentDir, `${slug}.mdx`);

  try {
    const source = await fs.readFile(fullPath, 'utf8');
    const { content, data } = matter(source);
    return { content, frontMatter: data };
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      // File not found → let caller decide what to do
      return null;
    }
    throw err; // other errors should still surface
  }
}

