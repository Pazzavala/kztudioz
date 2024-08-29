'use client';
import { ProductType, UserType } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import HeartFavorite from './heart-favorite';

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
         className='w-[220px] flex flex-col gap-2 bg-white p-5 rounded-lg dark:text-gray-800'
      >
         <Image
            src={product.media[0]}
            alt='product'
            width={250}
            height={300}
            className='h-[250px] rounded-lg object-contain bg-white'
         />
         <div>
            <p className='text-sm font-medium'>{product.title}</p>
         </div>
         <div className='flex justify-between items-center'>
            <p className='text-sm-medium'>${product.price}</p>
            <HeartFavorite
               size={21}
               product={product}
               updateSignedInUser={updateSignedInUser}
            />
         </div>
      </Link>
   );
}
