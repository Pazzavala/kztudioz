'use client';

import React from 'react';
import Image from 'next/image';
import { clownCollection } from '@/lib/data';

// Clown Collection
import blackClown from '@/public/assets/images/clowns/black_clown.png';
import blueClown from '@/public/assets/images/clowns/blue_clown.png';
import pinkClown from '@/public/assets/images/clowns/pink_clown.png';
import redClown from '@/public/assets/images/clowns/red_clown.png';
import useSectionInView from '@/lib/hooks';
import { Inter, Itim, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const itim = Itim({ weight: '400', subsets: ['latin'] });

export default function Hero() {
    const { ref } = useSectionInView('Home', 0.8);

    return (
        <section
            id='home'
            ref={ref}
            className='max-w-7xl w-full mx-auto -mt-20 sm:mt-10 mb-16 sm:my-24 p-4 scroll-mt-96'
        >
            <div className='flex flex-col md:flex-row gap-7 sm:gap-16 items-center justify-center'>
                <div className='flex flex-col sm:gap-8 text-center justify-center '>
                    <h1
                        className={` text-[#5278C3] font-black text-5xl sm:text-[4.5rem] sm:mb-5 leading-snug`}
                    >
                        New Sticker
                        <br />
                        <span className='sm:text-[6.5rem] tracking-widest text-blue-950'>
                            Drop!
                        </span>
                    </h1>

                    <p
                        className={`${inter.className} hidden sm:block md:text-left ml-7 md:mb-16 max-w-96 text-gray-700`}
                    >
                        Introducing our vibrant new sticker collection featuring
                        a variety of artistic clowns, perfect for adding a touch
                        of color and fun to any surface!
                    </p>
                    <div className='hidden md:flex gap-5'>
                        <a
                            className={`${inter.className} flex text-center justify-center items-center w-full text-nowrap rounded-full text-base font-medium bg-[#5278C3] text-white shadow-lg hover:scale-110 transition-transform`}
                        >
                            <p className='p-2 lg:p-3'>View Latest Collection</p>
                        </a>
                        <a
                            className={`${inter.className} flex text-center justify-center items-center w-full text-nowrap rounded-full text-base font-medium border-[1px] bg-gray-200 bg-opacity-70 border-[#5278C3] text-[#5278C3] backdrop-blur-md shadow-lg hover:scale-110 transition-transform`}
                        >
                            <p className='p-2 lg:p-3'>
                                All Sticker Collections
                            </p>
                        </a>
                    </div>
                </div>

                <div className='flex max-w-[46.5rem] justify-center items-start'>
                    <Image
                        src={blackClown}
                        alt='Black Clown'
                        className='w-1/4 object-contain blur-[0.75px]'
                    />
                    <Image
                        src={blueClown}
                        alt='Blue Clown'
                        className='w-1/2 mt-16 object-cover drop-shadow-custom-md'
                    />
                    <Image
                        src={pinkClown}
                        alt='Pink Clown'
                        className='w-1/4 object-contain blur-[0.75px]'
                    />
                </div>
                <div className={`${inter.className} md:hidden flex gap-3 mt-6`}>
                    <a className='flex justify-center items-center w-44 rounded-full text-sm bg-[#5278C3] text-white shadow-lg hover:scale-110 transition-transform'>
                        <p className='p-2'>View Latest Collection</p>
                    </a>
                    <a className='flex justify-center items-center w-44 rounded-full text-sm border border-[#5278C3] text-[#5278C3] shadow-lg hover:scale-110 transition-transform'>
                        <p className='p-2'>All Sticker Collections</p>
                    </a>
                </div>
            </div>
        </section>
    );
}
