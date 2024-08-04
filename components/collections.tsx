'use client';

import React from 'react';
import { Knewave } from 'next/font/google';
import Collection from './collection';
import { coverCollection } from '@/lib/data';
import useSectionInView from '@/lib/hooks';
import { Inter, Itim, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const itim = Itim({ weight: '400', subsets: ['latin'] });

export default function Collections() {
    const { ref } = useSectionInView('Shop', 0.3);

    return (
        <section
            ref={ref}
            id='shop'
            className='flex w-full justify-center bg-gradient-to-br from-[#E9FAFF] to-[#FFF6F9] scroll-mt-16 sm:scroll-mt-48'
        >
            <div className='max-w-7xl w-full sm:my-8 p-4 pb-8 bg-gradient-to-br from-[#E9FAFF] to-[#FFF6F9] scroll-mt-16 sm:scroll-mt-48'>
                <h2
                    className={` text-4xl sm:text-7xl text-center mt-4 mb-20 text-[#5278C3]`}
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
