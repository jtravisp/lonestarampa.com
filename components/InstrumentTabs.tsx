'use client';
import { AnimatePresence, motion } from 'framer-motion';
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
      <div className="flex flex-wrap gap-4 mb-10 overflow-x-auto sm:justify-center py-4">
        {guides.map(({ slug, title }) => {
          const selected = slug === active;

          return (
            <button
              key={slug}
              onClick={() => setActive(slug)}
              className={[
                'inline-flex items-center justify-center gap-2',
                'px-8 py-4 rounded-full text-xl font-semibold min-h-[3.5rem]',
                'transition-all duration-150 shadow-sm hover:shadow-lg',
                // ✦ solid fill & border
                'bg-amber-100 border border-odgreen/30',
                // motion & ring
                'hover:scale-[1.06] hover:ring-2 hover:ring-tpatch/40',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tpatch/60',
                // selected
                selected
                  ? 'bg-odgreen text-yellow-100 ring-2 ring-odgreen translate-y-[-2px] shadow-lg'
                  : 'text-odgreen',
              ].join(' ')}
            >
              {title}
            </button>
          );
        })}
      </div>

         {/* animated content */}
         <AnimatePresence mode="wait">
        {guides.map(({ slug, element }) =>
          slug === active ? (
            <motion.article
              key={slug}
              className="prose lg:prose-lg max-w-none"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {element}
            </motion.article>
          ) : null
        )}
      </AnimatePresence>
    </section>
  );
}
