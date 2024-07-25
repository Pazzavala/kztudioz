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
            className='max-w-[50rem] my-16 p-4 scroll-mt-96'
        >
            {/* <div className='flex items-center gap-96'>
                <Image
                    src={logo}
                    alt='Kzstudio Logo'
                    width={120}
                    // height={80}
                    quality={95}
                    priority={true}
                    // object-cover will perserve ratio
                    className='hidden sm:block '
                />
                <div className='hidden md:block top-7 right-5 h-10 w-52 bg-gray-100 rounded-full'>
                    <IoSearch className='' />
                </div>
            </div> */}
            <div className='flex'>
                <h1
                    className={`${knewave.className} text-[#5278C3] font-extrabold text-5xl text-shadow-md`}
                >
                    Latest Sticker <br /> Collection
                </h1>
                {/* {clownCollection.map((clown) => (
                    <Image
                        src={clown.imageUrl}
                        alt={clown.title}
                        className='w-36 object-cover'
                    />
                ))} */}
                <div className='flex'>
                    <Image
                        src={blackClown}
                        alt='Black Clown'
                        className='w-32 object-contain blur-[0.75px]'
                    />
                    <Image
                        src={blueClown}
                        alt='Blue Clown'
                        className='w-64 object-cover'
                    />
                    <Image
                        src={pinkClown}
                        alt='Pink Clown'
                        className='w-32 object-contain blur-[0.75px]'
                    />
                </div>
            </div>
        </section>
    );
}
