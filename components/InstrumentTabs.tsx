'use client';
import { useState } from 'react';

type Guide = {
  slug: string;
  title: string;
  element: React.ReactNode;
};

export default function InstrumentTabs({ guides }: { guides: Guide[] }) {
  const [active, setActive] = useState(guides[0].slug);

  return (
    <section className="mt-12">
      {/* selector bar */}
      <div className="not-prose flex flex-wrap gap-4 mb-10 overflow-x-auto sm:justify-center py-4">
        {guides.map(({ slug, title }) => {
          const selected = slug === active;

          return (
            <button
              key={slug}
              onClick={() => setActive(slug)}
              className={[
                /* core pill shape & font */
                'px-8 py-4 rounded-full text-2xl font-semibold min-h-[4rem]',
                'flex items-center justify-center leading-tight',

                /* subtle gradient base + shadow */
                'bg-gradient-to-b from-white/90 to-white shadow-md',

                /* motion / glow on hover + focus */
                'transition-all duration-150',
                'hover:shadow-lg hover:scale-105 hover:ring-2 hover:ring-odgreen/40',
                'active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-odgreen/60',
                'hover:drop-shadow-sm',

                /* selected vs idle palette */
                selected
                  ? 'bg-odgreen text-yellow-100 ring-2 ring-odgreen shadow-lg translate-y-[-2px]'
                  : 'text-gray-800 border border-gray-300 hover:text-odgreen',
              ].join(' ')}
            >
              {title}
            </button>
          );
        })}
      </div>

      {/* active guide content */}
      {guides.map(({ slug, element }) =>
        slug === active ? (
          <article key={slug} className="prose lg:prose-lg max-w-none">
            {element}
          </article>
        ) : null
      )}
    </section>
  );
}
