'use client';
import Image from 'next/image';
import { useState } from 'react';

interface GalleryProps {
   productMedia: string[];
}

export default function Gallery({ productMedia }: GalleryProps) {
   const [mainImage, setMainImage] = useState(productMedia[0]);

   return (
      //bg-gradient-to-br from-[#C6EFFF] to-[#D6D0FA]
      <div className='flex flex-col gap-3 max-w-3xl'>
         <div className='bg-white rounded-xl flex flex-col-reverse 2xl:flex-row gap-10 pb-5 px-10 flex-center'>
            <div className='gap-2 overflow-auto min-w-28 tailwind-scrollbar-hide flex 2xl:flex-col'>
               {productMedia.map((image, index) => (
                  <Image
                     key={index}
                     src={image}
                     alt='product'
                     width={200}
                     height={200}
                     onClick={() => setMainImage(image)}
                     className={`w-28 h-28 rounded-lg bg-white object-cover cursor-pointer ${
                        mainImage === image ? 'border-2 border-primary-400' : ''
                     }`}
                  />
               ))}
            </div>
            <Image
               src={mainImage}
               alt='product'
               width={500}
               height={500}
               className='w-[28rem] h-[28rem] sm:h-144 my-5 rounded-lg drop-shadow-xl object-contain'
            />
         </div>
      </div>
   );
}
