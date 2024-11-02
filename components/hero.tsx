'use client';

import React from 'react';
import Image from 'next/image';

// Clown Collection
import blackClown from '@/public/assets/images/clowns/black_clown.png';
import blueClown from '@/public/assets/images/clowns/blue_clown.png';
import pinkClown from '@/public/assets/images/clowns/pink_clown.png';
import useSectionInView from '@/lib/hooks/useSectionInView';
import Link from 'next/link';
import { CollectionType, ProductType } from '@/lib/types';
import { getCollectionDetails, getProducts } from '@/lib/actions/actions';

interface HeroProps {
   collections: CollectionType[];
   // collectionDetails: CollectionType;
}

export default function Hero({ collections }: HeroProps) {
   const { ref } = useSectionInView('Home', 0.8);
   const stickerCollection = collections[0];
   const latestCollectionName = collections[1]; // in future might just pass latest collection

   // // TODO: get images from latest collection to display in HERO
   // collectionDetails.products.map((product: ProductType) => {
   //
   // })

   return (
      <section
         id='home'
         ref={ref}
         className='max-w-[130rem] w-full mx-auto my-16 px-4 py-6 xl:my-0 xl:pb-48 scroll-mt-96'
      >
         <div className='flex flex-col lg:flex-row gap-7 sm:gap-36 flex-center'>
            <div className='flex flex-col sm:gap-8 text-center justify-center '>
               <h1
                  className={`font-sedgwick-ave-display text-white drop-shadow-custom-lg font-black text-5xl sm:text-[4.5rem] tracking-wide sm:mb-5 leading-snug`}
               >
                  New Sticker
                  <br />
                  <span className='sm:text-[6.5rem] tracking-widest text-blue-950'>
                     Drop!
                  </span>
               </h1>

               <p
                  className={`hidden sm:block md:text-left ml-7 md:mb-16 max-w-96 text-gray-700`}
               >
                  Introducing our vibrant new sticker collection featuring a variety
                  of artistic clowns, perfect for adding a touch of color and fun to
                  any surface!
               </p>
               <div className='hidden md:flex gap-5  text-xl font-bold font-sedgwick-ave-display tracking-wider'>
                  <Link
                     href={`/collections/${latestCollectionName._id}`}
                     className={`cursor-pointer flex text-center flex-center w-full text-nowrap rounded-full bg-blue-kz text-white shadow-lg hover:scale-110 transition-transform`}
                  >
                     <p className='p-2 lg:p-3'>Latest Collection</p>
                  </Link>
                  <Link
                     href={`/collections/${stickerCollection._id}`}
                     className={`cursor-pointer flex text-center flex-center w-full text-nowrap rounded-full lg:bg-gray-50/50 hover:bg-white/90 bg-transparent bg-opacity-30 text-blue-kz shadow-lg hover:scale-110 transition-transform`}
                  >
                     <p className='p-2 lg:p-3'>Shop Stickers</p>
                  </Link>
               </div>
            </div>

            {/* {productsLatestCollection.map((product: ProductType) => (
               <div className='flex max-w-[46.5rem] justify-center items-start'>
                  <Image />
               </div>
            ))} */}
            <div className='flex max-w-[46.5rem] justify-center items-start'>
               <Image
                  src={blackClown}
                  alt='Black Clown'
                  className='w-1/4 object-contain blur-[1px]'
               />
               <Image
                  src={blueClown}
                  alt='Blue Clown'
                  className='w-1/2 mt-16 object-cover drop-shadow-custom-md'
               />
               <Image
                  src={pinkClown}
                  alt='Pink Clown'
                  className='w-1/4 object-contain blur-[1px]'
               />
            </div>
            <div
               className={`md:hidden flex gap-3 mt-6 text-sm font-sedgwick-ave-display tracking-wider`}
            >
               <Link
                  href={`/collections/${latestCollectionName._id}`}
                  className='flex flex-center w-44 rounded-full bg-blue-kz text-white shadow-lg'
               >
                  <p className='p-2'>Latest Collection</p>
               </Link>
               <Link
                  href={'/#shop'}
                  className='flex flex-center w-44 rounded-full bg-opacity-30 border border-blue-kz text-blue-kz shadow-lg'
               >
                  <p className='p-2'>Shop Stickers</p>
               </Link>
            </div>
         </div>
      </section>
   );
}
