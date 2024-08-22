'use client';
import { CollectionType, ProductType, UserType } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import HeartFavorite from './HeartFavorite';

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
         className='w-[220px] flex flex-col gap-2 bg-white p-5 rounded-lg'
      >
         <Image
            src={typeof product === 'object' ? product.media[0] : ''}
            alt='product'
            width={250}
            height={300}
            className='h-[250px] rounded-lg object-contain'
         />
         <div>
            <p className='text-base-bold'>{product.title}</p>
         </div>
         <div className='flex justify-between items-center'>
            <p className='text-body-bold'>${product.price}</p>
            <HeartFavorite
               product={product}
               updateSignedInUser={updateSignedInUser}
            />
         </div>
      </Link>
   );
}
