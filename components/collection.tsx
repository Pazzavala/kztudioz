import React from 'react';
import { coverCollection } from '@/lib/data';
import Image from 'next/image';

type collectionProps = (typeof coverCollection)[number];

export default function Collection({ title, imageUrl }: collectionProps) {
    return (
        <article className='flex flex-col gap-y-3 my-3 justify-center items-center'>
            <h3 className='sm:hidden m-3 font-bold text-xl text-gray-600'>
                {title}
            </h3>
            <div className='flex flex-col m-2 w-80 sm:w-[14.5rem] h-96 hover:scale-110 justify-center items-center bg-gradient-to-br from-[#C6EFFF] to-[#D6D0FA] border border-black/5 rounded-xl transition'>
                <div className='relative w-full h-full p-4'>
                    <Image
                        src={imageUrl}
                        alt={title}
                        layout='fill'
                        className='object-contain rounded-xl drop-shadow-custom-lg p-4'
                    />
                </div>
            </div>
            <a className='flex justify-center items-center w-28 rounded-full bg-[#5278C3] text-white hover:scale-110'>
                <p className='p-2'>Shop</p>
            </a>
        </article>
    );
}
