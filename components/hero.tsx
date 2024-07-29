'use client';

import React from 'react';
import Image from 'next/image';
import { IoSearch } from 'react-icons/io5';
import { Knewave } from 'next/font/google';

import { clownCollection } from '@/lib/data';

// Clown Collection
import blackClown from '@/public/assets/images/clowns/black_clown.png';
import blueClown from '@/public/assets/images/clowns/blue_clown.png';
import pinkClown from '@/public/assets/images/clowns/pink_clown.png';
import redClown from '@/public/assets/images/clowns/red_clown.png';
import logo from '@/public/assets/logo.png';
import useSectionInView from '@/lib/hooks';

const knewave = Knewave({ weight: '400', subsets: ['latin'] });

export default function Hero() {
    const { ref } = useSectionInView('Home', 0.5);

    return (
        <section
            id='home'
            ref={ref}
            className='max-w-5xl mb-16 sm:my-24 p-4 scroll-mt-96'
        >
            {/* <div className='absolute flex items-center top-0'>
                <Image
                    src={logo}
                    alt='Kzstudio Logo'
                    width={120}
                    // height={80}
                    quality={95}
                    priority={true}
                    // object-cover will perserve ratio
                    className='hidden sm:block'
                />
                <div className='hidden md:block h-10 w-52 bg-gray-100 rounded-full'>
                    <IoSearch className='' />
                </div>
            </div> */}

            <div className='flex flex-col md:flex-row gap-16 sm:gap-16 lg:gap-20'>
                <div className='flex flex-col gap-8 text-nowrap justify-center'>
                    <h1
                        className={`${knewave.className} text-[#5278C3] font-extrabold text-5xl text-shadow-md leading-snug`}
                    >
                        Latest Sticker <br /> Collection
                    </h1>
                    <a className='hidden md:flex justify-center items-center w-28 rounded-full bg-[#5278C3] text-white hover:scale-110'>
                        <p className='px-2 py-2'>Shop Now</p>
                    </a>
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
                        className='w-48 sm:w-64 mt-16 object-cover'
                    />
                    <Image
                        src={pinkClown}
                        alt='Pink Clown'
                        className='w-28 sm:w-32 object-contain blur-[0.75px]'
                    />
                </div>
                <a className='md:hidden flex justify-center items-center w-28 rounded-full bg-[#5278C3] text-white hover:scale-110'>
                    <p className='px-2 py-2'>Shop Now</p>
                </a>
            </div>
        </section>
    );
}
