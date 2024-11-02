'use client';
import { ProductType } from '@/lib/types';
import React, { useState } from 'react';
import HeartFavorite from './heart-favorite';
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi';
import useCart from '@/lib/hooks/useCart';

interface ProductInfoProps {
   productInfo: ProductType;
}
export default function ProductInfo({ productInfo }: ProductInfoProps) {
   const [quantity, setQuantity] = useState<number>(1);
   const cart = useCart();

   return (
      <div className='max-w-2xl text-xl w-full p-10 flex flex-col gap-10 bg-white text-gray-800 rounded-xl'>
         <div className='flex justify-between items-center'>
            <h3 className='py-5 text-[2.9rem] font-bold font-sedgwick-ave-display text-blue-kz'>
               {productInfo.title}
            </h3>
            <HeartFavorite size={25} product={productInfo} baseColor='gray' />
         </div>
         <p className='text-2xl font-bold'>$ {productInfo.price}</p>
         <div className='flex flex-col gap-2'>
            <p className='text-2xl font-semibold text-blue-kz'>Description:</p>
            <p className='text-base md:text-xl font-medium'>
               {productInfo.description}
            </p>
         </div>
         <div className='flex flex-col gap-2'>
            <p className='text-2xl font-semibold text-blue-kz'>Quantity:</p>
            <div className='flex gap-4 items-center'>
               <HiOutlineMinusCircle
                  size={25}
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className='hover:text-blue-kz cursor-pointer'
               />
               <p className='text-2xl font-bold mx-6'>{quantity}</p>
               <HiOutlinePlusCircle
                  size={25}
                  onClick={() => setQuantity(quantity + 1)}
                  className='hover:text-blue-kz cursor-pointer'
               />
            </div>
         </div>
         <button
            onClick={() => cart.addItem({ item: productInfo, quantity })}
            className='outline text-base font-bold py-3 rounded-lg hover:bg-black hover:text-white'
         >
            Add To Cart
         </button>
      </div>
   );
}
