'use client';

import Image from 'next/image';
import React from 'react';
import { clownCollection } from '@/lib/data';
import { dichosCollection } from '@/lib/data';
import { darkCollection } from '@/lib/data';
import { monthsCollection } from '@/lib/data';

export default function Background() {
    return (
        <div className='absolute  bg-gray-50 dark:bg-gray-900 text-gray-950 -z-10 flex w-full h-full top-16'>
            {/* <div className='flex-none w-1/4 bg-white' />
            <div className='flex-auto flex justify-center items-center'>
                <div className='px-12 blur-3xl'>
                    {dichosCollection.map((dicho, index) => (
                        <Image
                            key={index}
                            src={dicho.imageUrl}
                            alt={dicho.title}
                            width={400}
                            height={400}
                        />
                    ))}
                </div>
                <div className='px-12 blur-3xl'>
                    {clownCollection.map((clown, index) => (
                        <Image
                            key={index}
                            src={clown.imageUrl}
                            alt={clown.title}
                            width={400}
                            height={400}
                        />
                    ))}
                </div>
            </div>
            <div className='flex-none w-1/4 bg-white' /> */}
            <div className='bg-[#fbe2e3] absolute top-0 sm:top-[-6rem] -z-10 right-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]' />
            <div className='bg-[#dbd7fb] absolute top-0 sm:top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]' />
            <div className='bg-[#fbe2e3] absolute bottom-0 sm:bottom-[-1rem] -z-10 right-[1rem] h-[32rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]' />
            <div className='bg-[#dbd7fb] absolute bottom-0 sm:bottom-[-1rem] -z-10 left-[-35rem] h-[32rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]' />
        </div>
    );
}
