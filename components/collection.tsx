import React from 'react';
import { coverCollection } from '@/lib/data';
import Image from 'next/image';

type collectionProps = (typeof coverCollection)[number];

export default function Collection({ title, imageUrl }: collectionProps) {
    return (
        <article className='group flex my-3 sm:my-0 sm:h-[43rem] flex-col  even:sm:flex-row-reverse sm:flex-row sm:justify-between items-center sm:items-start'>
            {/* Image */}
            <div className='flex flex-col mx-6 w-80 sm:group-even:mx-0 sm:-mx-16 sm:w-1/2 h-96 sm:h-[40rem] hover:scale-110 justify-center items-center sm:bg-none sm:border-none bg-gradient-to-br from-[#C6EFFF] to-[#D6D0FA] border border-black/5 rounded-xl transition'>
                <div className='relative w-full h-full p-4'>
                    <Image
                        src={imageUrl}
                        alt={title}
                        layout='fill'
                        className=' object-contain flex justify-start rounded-xl drop-shadow-custom-lg p-4 sm:p-0 '
                    />
                </div>
            </div>

            {/* Description of Collection */}
            <div className='flex flex-col justify-center items-center sm:items-start sm:h-[40rem] sm:w-1/2 p-4'>
                <h3
                    className={`font-sedgwick-ave-display font-bold text-2xl sm:text-5xl sm:mb-4 text-gray-700`}
                >
                    The {title}
                </h3>
                <p className={`text-gray-400 mb-3 sm:mb-6`}>August 3, 2024</p>
                <p
                    className={`hidden sm:block sm:text-xl text-gray-600 sm:mb-8`}
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eligendi exercitationem dicta dignissimos excepturi est,
                    totam, necessitatibus magni natus eaque quos nemo mollitia
                    in similique hic dolor! Praesentium aut fugiat excepturi?
                </p>
                <a
                    className={` flex justify-center items-center w-28 rounded-full bg-blue-kz text-white  hover:scale-110`}
                >
                    <p className='p-2'>Shop</p>
                </a>
            </div>
        </article>
    );
}
