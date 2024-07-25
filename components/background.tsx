'use client';

import Image from 'next/image';
import React from 'react';
import { clownCollection } from '@/lib/data';
import { dichosCollection } from '@/lib/data';
import { darkCollection } from '@/lib/data';
import { monthsCollection } from '@/lib/data';

export default function Background() {
    return (
        <div className='absolute -z-10 flex w-full h-full top-16'>
            <div className='flex-none w-1/4 bg-white'></div>
            <div className='flex-auto flex justify-center items-center'>
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
            </div>
            <div className='flex-none w-1/4 bg-white'></div>
        </div>
    );
}
