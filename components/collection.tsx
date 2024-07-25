import React from 'react';
import { coverCollection } from '@/lib/data';
import Image from 'next/image';

type collectionProps = (typeof coverCollection)[number];

export default function Collection({ title, imageUrl }: collectionProps) {
    return (
        <article className='flex flex-col gap-y-3 justify-center items-center'>
            <div className='flex justify-center items-center bg-gradient-to-br from-[#C6EFFF] to-[#D6D0FA] max-w-52 h-full border border-black/5 rounded-xl object-cover'>
                <Image
                    src={imageUrl}
                    alt={title}
                    className='object-cover p-4 rounded-xl drop-shadow-custom-lg'
                />
            </div>
            <a className='flex justify-center items-center w-28 rounded-full bg-[#5278C3] text-white hover:scale-110'>
                <p className='px-2 py-2'>Shop Now</p>
            </a>
        </article>
    );
}
