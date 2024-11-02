'use client';
import { ProductType, UserType } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import HeartFavorite from './heart-favorite';
import CardBackground from './card-background';

interface ProductCardProps {
   product: ProductType;
   updateSignedInUser?: (updatedUser: UserType) => void;
}

export default function ProductCard({
   product,
   updateSignedInUser,
}: ProductCardProps) {
   return (
      <Link
         href={`/products/${product._id}`}
         className='relative lg:w-[280px] h-full flex flex-col gap-2 bg-white p-5 rounded-lg drop-shadow-custom-lg overflow-hidden'
      >
         {/* Container for background effects */}
         <div className='absolute inset-0 overflow-hidden'>
            {/* Animated circle */}
            <CardBackground />
         </div>

         {/* Content container with higher z-index */}
         <div className='relative z-10 flex flex-col gap-2'>
            <Image
               src={product.media[0]}
               alt='product'
               width={250}
               height={300}
               className='h-[340px] rounded-lg object-contain bg-white'
            />
            <div>
               <p className='text-white text-xl font-semibold'>{product.title}</p>
            </div>
            <div className='flex justify-between items-center'>
               <p className='text-white text-base-medium'>${product.price}</p>
               <HeartFavorite
                  size={21}
                  product={product}
                  baseColor='white'
                  updateSignedInUser={updateSignedInUser}
               />
            </div>
         </div>
      </Link>
   );
}
