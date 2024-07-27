'use client';

import React from 'react';
import { Knewave } from 'next/font/google';
import Collection from './collection';
import { coverCollection } from '@/lib/data';
import useSectionInView from '@/lib/hooks';
const knewave = Knewave({ weight: '400', subsets: ['latin'] });

export default function Collections() {
    const { ref } = useSectionInView('Shop', 0.7);

    return (
        <section
            ref={ref}
            id='shop'
            className='max-w-6xl sm:my-24 p-4 pb-8 bg-gradient-to-br from-[#E9FAFF] to-[#FFF6F9] scroll-m-16 sm:scroll-mt-48'
        >
            <h2
                className={`${knewave.className}  text-3xl mt-4 mb-8 text-[#5278C3]`}
            >
                Collections
            </h2>
            <div className='grid grid-cols-2 sm:flex sm:flex-row justify-evenly'>
                {coverCollection.map((collection, index) => (
                    <React.Fragment key={index}>
                        <Collection {...collection} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
