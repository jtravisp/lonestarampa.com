// app/page.tsx
import InstrumentTabs from '@/components/InstrumentTabs';
import { getContent, getInstrumentSlugs } from '@/lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function HomePage() {
  const universal = (await getContent('universal'))?.content ?? '';

  // Define your custom instrument order
  const instrumentOrder = [
    'saxophone',
    'trumpet',
    'trombone',
    'euphonium',
    'tuba',
    'clarinet',
    'flute',
    'piccolo',
    'percussion',
    'guitar',
    'bass',
    'piano',
    'vocals'
  ];

  const guides = (
    await Promise.all(
      (await getInstrumentSlugs()).map(async (slug) => {
        const data = await getContent(slug);
        if (!data) return null;

        return {
          slug,
          title: data.frontMatter.title || slug.replace('-', ' '),
          element: <MDXRemote key={slug} source={data.content} />, // server-rendered
        };
      })
    )
  ).filter(Boolean) as { slug: string; title: string; element: React.ReactNode }[];

  // Sort guides based on the custom order
  const sortedGuides = guides.sort((a, b) => {
    const indexA = instrumentOrder.indexOf(a.slug);
    const indexB = instrumentOrder.indexOf(b.slug);
    
    // If both are in the order array, sort by their position
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    // If only one is in the order array, it comes first
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    // If neither is in the order array, sort alphabetically
    return a.slug.localeCompare(b.slug);
  });

  return (
    <>
      <article className="prose lg:prose-lg max-w-none">
        <MDXRemote source={universal} />
      </article>
      <InstrumentTabs guides={sortedGuides} />
    </>
  );
}
