'use client';
import { ProductType, UserType } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import HeartFavorite from './heart-favorite';
import CardBackground from './card-background';

interface productCardProps {
   product: ProductType;
   updateSignedInUser?: (updatedUser: UserType) => void;
}
export default function ProductCard({
   product,
   updateSignedInUser,
}: productCardProps) {
   return (
      <Link
         href={`/products/${product._id}`}
         className='w-[220px] flex flex-col gap-2 bg-white/95 p-5 rounded-lg drop-shadow-custom-lg'
      >
         <CardBackground />

         <Image
            src={product.media[0]}
            alt='product'
            width={250}
            height={300}
            className='h-[250px] rounded-lg object-contain bg-white'
         />
         <div>
            <p className='text-white text-sm font-bold'>{product.title}</p>
         </div>
         <div className='flex justify-between items-center'>
            <p className='text-white text-sm-medium'>${product.price}</p>
            <HeartFavorite
               size={21}
               product={product}
               updateSignedInUser={updateSignedInUser}
            />
         </div>
      </Link>
   );
}
