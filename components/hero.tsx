'use client';

import React from 'react';
import Image from 'next/image';
import { Knewave } from 'next/font/google';

import { clownCollection } from '@/lib/data';

// Clown Collection
import blackClown from '@/public/assets/images/clowns/black_clown.png';
import blueClown from '@/public/assets/images/clowns/blue_clown.png';
import pinkClown from '@/public/assets/images/clowns/pink_clown.png';
import redClown from '@/public/assets/images/clowns/red_clown.png';
import useSectionInView from '@/lib/hooks';

const knewave = Knewave({ weight: '400', subsets: ['latin'] });

export default function Hero() {
    const { ref } = useSectionInView('Home', 0.5);

    return (
        <section
            id='home'
            ref={ref}
            className='max-w-5xl -mt-16 sm:mt-0 mb-16 sm:my-24 p-4 scroll-mt-96'
        >
            <div className='flex flex-col md:flex-row gap-7 sm:gap-16 lg:gap-20'>
                <div className='flex flex-col sm:gap-8 text-nowrap justify-center'>
                    <h1
                        className={`${knewave.className} md:mb-28 text-center sm:text-start text-[#5278C3] font-extrabold text-5xl text-shadow-md leading-snug`}
                    >
                        Latest Sticker <br /> Collection
                    </h1>
                    <div className='flex gap-5'>
                        <a className='hidden md:flex mt-3 justify-center items-center w-48 rounded-full text-base bg-[#5278C3] text-white shadow-lg shadow-black/10 hover:scale-110'>
                            <p className='px-3 py-3'>View Latest Collection</p>
                        </a>
                        <a className='hidden md:flex mt-3 justify-center items-center w-48 rounded-full text-base border border-[#5278C3] text-[#5278C3] shadow-lg shadow-black/10 hover:scale-110'>
                            <p className='px-3 py-3'>All Sticker Collections</p>
                        </a>
                    </div>
                </div>

                {/* {clownCollection.map((clown) => (
                    <Image
                        src={clown.imageUrl}
                        alt={clown.title}
                        className='w-36 object-cover'
                    />
                ))} */}
                <div className='flex justify-center items-start'>
                    <Image
                        src={blackClown}
                        alt='Black Clown'
                        className='w-28 sm:w-32 object-contain blur-[0.75px]'
                    />
                    <Image
                        src={blueClown}
                        alt='Blue Clown'
                        className='w-48 sm:w-64 mt-16 object-cover drop-shadow-custom-md'
                    />
                    <Image
                        src={pinkClown}
                        alt='Pink Clown'
                        className='w-28 sm:w-32 object-contain blur-[0.75px] '
                    />
                </div>
                <div className='flex gap-2'>
                    <a className='md:hidden flex mt-3 md:mt-0 justify-center items-center w-44 rounded-full text-sm md:text-base bg-[#5278C3] text-white shadow-lg shadow-black/10 hover:scale-110'>
                        <p className='px-3 py-3'>View Latest Collection</p>
                    </a>
                    <a className='md:hidden flex mt-3 md:mt-0 justify-center items-center w-44 rounded-full text-sm md:text-base border border-[#5278C3] text-[#5278C3] shadow-lg shadow-black/10 hover:scale-110'>
                        <p className='px-3 py-3'>All Sticker Collections</p>
                    </a>
                </div>
            </div>
        </section>
    );
}
