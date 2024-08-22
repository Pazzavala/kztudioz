import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '@/lib/types';

interface collectionProps {
   _id: string;
   title: string;
   media: string[];
   products: number;
}

export default function Collection({
   _id,
   title,
   media,
   products,
}: collectionProps) {
   return (
      <article className='group flex my-3 md:my-0 md:h-[43rem] flex-col even:md:flex-row md:flex-row-reverse md:justify-between items-center md:items-start'>
         {/* Image */}
         <div className='flex flex-col mx-6 w-80 sm:group-even:mx-0 sm:-mx-16 sm:w-1/2 h-96 sm:h-[40rem] justify-center items-center sm:bg-none sm:border-none bg-gradient-to-br from-[#C6EFFF] to-[#D6D0FA] border border-black/5 rounded-xl transition'>
            <div className='relative w-full h-full p-4'>
               <Image
                  src={media[0]}
                  alt={title}
                  width={350}
                  height={200}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-contain flex justify-start rounded-xl drop-shadow-custom-lg p-4 sm:p-0 '
               />
            </div>
         </div>
         {/* Description of Collection */}
         <div className=' flex flex-col justify-center items-center md:items-start md:h-[40rem] md:w-1/2 p-4'>
            <h3
               className={`text-nowrap font-sedgwick-ave-display font-bold text-2xl sm:text-4xl lg:text-5xl md:mb-4 text-gray-700 dark:text-white`}
            >
               The {title}
            </h3>
            <p className={`text-gray-400 dark:text-gray-50 mb-3 md:mb-6`}>
               August 3, 2024
            </p>
            <p
               className={`hidden md:block md:text-lg lg:text-xl text-gray-600 dark:text-white md:mb-8`}
            >
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
               exercitationem dicta dignissimos excepturi est, totam, necessitatibus
               magni natus eaque quos nemo mollitia in similique hic dolor!
               Praesentium aut fugiat excepturi?
            </p>
            <Link
               href={`/collections/${_id}`}
               className={`flex justify-center items-center w-28 p-2 rounded-full bg-blue-kz text-white font-medium hover:scale-110`}
            >
               Shop
            </Link>
         </div>
      </article>
   );
}

// 'use client';
// import React from 'react';
// import { coverCollection } from '@/lib/data';
// import Image from 'next/image';
// import Carousel from './Carousel';

// import { clownCollection } from '@/lib/data';
// import Link from 'next/link';
// import { ProductType } from '@/lib/types';

// interface collectionProps {
//    _id: string;
//    title: string;
//    media: string[];
//    products: ProductType[];
// }

// export default function Collection({
//    _id,
//    title,
//    media,
//    products,
// }: collectionProps) {
//    return (
//       <article className='group flex my-3 md:my-0 md:h-[43rem] flex-col even:md:flex-row-reverse md:flex-row md:justify-between items-center md:items-start'>
//          {/* Image */}
//          <div className='flex flex-col mx-6 w-80 sm:group-even:mx-0 sm:-mx-16 sm:w-1/2 h-96 sm:h-[40rem]  justify-center items-center sm:bg-none sm:border-none bg-gradient-to-br from-[#C6EFFF] to-[#D6D0FA] border border-black/5 rounded-xl transition'>
//             <div className='relative w-full h-full p-4'>
//                <Image
//                   src={media[0]}
//                   alt={title}
//                   width={350}
//                   height={200}
//                   sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
//                   className='object-contain flex justify-start rounded-xl drop-shadow-custom-lg p-4 sm:p-0 '
//                />
//                <Carousel autoSlide={true} autoSlideInterval={6000}>
//                   {media.map((sticker) => (
//                      <Image
//                         src={sticker}
//                         alt={title}
//                         width={350}
//                         height={200}
//                         sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
//                         className='object-contain drop-shadow-custom-lg md:p-4 '
//                      />
//                   ))}
//                </Carousel>
//             </div>
//          </div>

//          {/* Description of Collection */}
//          <div className=' flex flex-col justify-center items-center md:items-start md:h-[40rem] md:w-1/2 p-4'>
//             <h3
//                className={`text-nowrap font-sedgwick-ave-display font-bold text-2xl sm:text-4xl lg:text-5xl md:mb-4 text-gray-700 dark:text-white`}
//             >
//                The {title}
//             </h3>
//             <p className={`text-gray-400 dark:text-gray-50 mb-3 md:mb-6`}>
//                August 3, 2024
//             </p>
//             <p
//                className={`hidden md:block md:text-lg lg:text-xl text-gray-600 dark:text-white md:mb-8`}
//             >
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
//                exercitationem dicta dignissimos excepturi est, totam, necessitatibus
//                magni natus eaque quos nemo mollitia in similique hic dolor!
//                Praesentium aut fugiat excepturi?
//             </p>
//             <Link
//                href='/shop'
//                className={`flex justify-center items-center w-28 p-2 rounded-full bg-blue-kz text-white font-medium hover:scale-110`}
//             >
//                Shop
//             </Link>
//          </div>
//       </article>
//    );
// }
