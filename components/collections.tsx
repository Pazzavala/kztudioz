'use client';

import React from 'react';
import Collection from './collection';
import { coverCollection } from '@/lib/data';
import useSectionInView from '@/lib/hooks';

export default function Collections() {
    const { ref } = useSectionInView('Shop', 0.3);

    return (
        <section
            ref={ref}
            id='shop'
            className='flex w-full justify-center bg-gradient-to-br from-[#e2f8ff] to-[#fff2f6] scroll-mt-16 sm:scroll-mt-[7.5rem]'
        >
            <div className='max-w-7xl w-full sm:my-8 p-4 pb-8 scroll-mt-16 sm:scroll-mt-48'>
                <h2
                    className={`font-sedgwick-ave-display text-4xl sm:text-7xl font-bold tracking-wider text-center mt-4 mb-20 text-blue-kz`}
                >
                    Collections
                </h2>

                <div className='flex flex-col justify-center'>
                    {coverCollection.map((collection, index) => (
                        <React.Fragment key={index}>
                            <Collection {...collection} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
