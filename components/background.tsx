'use client';

import Image from 'next/image';
import React from 'react';
import { clownCollection } from '@/lib/data';
import { dichosCollection } from '@/lib/data';
import { darkCollection } from '@/lib/data';
import { monthsCollection } from '@/lib/data';

export default function Background() {
    return (
        <div className='absolute -z-10 flex gap-11 justify-center top-16'>
            <div className='px-24 blur-3xl'>
                {clownCollection.map((clown) => (
                    <Image src={clown.imageUrl} alt={clown.title} width={400} />
                ))}
            </div>
            <div className='px-24 blur-3xl'>
                {dichosCollection.map((dicho) => (
                    <Image src={dicho.imageUrl} alt={dicho.title} width={400} />
                ))}
            </div>
        </div>
    );
}
