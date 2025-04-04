'use client';

import React from 'react';
import Collection from './collection';
import useSectionInView from '@/lib/hooks/useSectionInView';
import { CollectionType } from '@/lib/types';

interface CollectionProps {
   collections: CollectionType[];
}

export default function Collections({ collections }: CollectionProps) {
   const { ref } = useSectionInView('Shop', 0.1);

   return (
      <section
         ref={ref}
         id='shop'
         className='flex w-full justify-center bg-gradient-to-br from-[#e2f8ff] to-[#fff2f6] scroll-mt-16 sm:scroll-mt-[0rem]'
      >
         <div className='max-w-[90rem] w-full sm:my-8 p-4 pb-8 scroll-mt-16 sm:scroll-mt-48'>
            <h2
               className={`font-sedgwick-ave-display text-4xl sm:text-7xl font-bold tracking-wider text-center mt-4 mb-20 text-blue-kz sm:pt-20`}
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
