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
      <div className='flex flex-col gap-3 max-w-[500px]'>
         <div className='bg-white px-2 rounded-xl'>
            <Image
               src={mainImage}
               alt='product'
               width={500}
               height={500}
               className='w-[28rem] h-[28rem] my-10 rounded-lg drop-shadow-xl object-contain'
            />
         </div>
         <div className='flex gap-2 overflow-auto tailwind-scrollbar-hide'>
            {productMedia.map((image, index) => (
               <Image
                  key={index}
                  src={image}
                  alt='product'
                  width={200}
                  height={200}
                  onClick={() => setMainImage(image)}
                  className={`w-28 h-28 rounded-lg object-cover cursor-pointer ${
                     mainImage === image ? 'border-2 border-primary-400' : ''
                  }`}
               />
            ))}
         </div>
      </div>
   );
}
