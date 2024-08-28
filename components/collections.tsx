'use client';

import React from 'react';
import Collection from './collection';
import useSectionInView from '@/lib/hooks/useSectionInView';
import { CollectionType } from '@/lib/types';

interface CollectionProps {
   collections: CollectionType[];
}

export default function Collections({ collections }: CollectionProps) {
   const { ref } = useSectionInView('Shop', 0.3);

   return (
      <section
         ref={ref}
         id='shop'
         className='flex w-full justify-center bg-gradient-to-br from-[#e2f8ff] to-[#fff2f6] dark:from-blue-800 dark:to-[#c2a6fa] scroll-mt-16 sm:scroll-mt-[7.5rem]'
      >
         <div className='max-w-7xl w-full sm:my-8 p-4 pb-8 scroll-mt-16 sm:scroll-mt-48'>
            <h2
               className={`font-sedgwick-ave-display text-4xl sm:text-7xl font-bold tracking-wider text-center mt-4 mb-20 text-blue-kz dark:text-white`}
            >
               Collections
            </h2>

            <div className='flex flex-col justify-center'>
               {!collections || collections.length === 0 ? (
                  <p>No Collections Found</p>
               ) : (
                  <div className='flex flex-col items-center justify-center gap-8'>
                     {collections.map((collection: CollectionType) => (
                        <Collection key={collection._id} {...collection} />
                     ))}
                  </div>
               )}
            </div>
         </div>
      </section>
   );
}
