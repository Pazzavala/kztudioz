'use client';
import { ProductType } from '@/lib/types';
import React, { useState } from 'react';
import HeartFavorite from './HeartFavorite';
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi';
import useCart from '@/lib/hooks/useCart';

interface ProductInfoProps {
   productInfo: ProductType;
}
export default function ProductInfo({ productInfo }: ProductInfoProps) {
   const [quantity, setQuantity] = useState<number>(1);
   const cart = useCart();

   return (
      <div className='max-w-[401px] flex flex-col gap-4 min-w-[400px]'>
         <div className='flex justify-between items-center'>
            <h3 className='text-xl font-bold'>{productInfo.title}</h3>
            <HeartFavorite product={productInfo} />
         </div>
         <p className='text-xl font-medium'>$ {productInfo.price}</p>
         <div className='flex flex-col gap-2'>
            <p className='text-base font-semibold text-gray-800'>Description:</p>
            <p className='text-sm font-medium text-gray-700'>
               {productInfo.description}
            </p>
         </div>
         <div className='flex flex-col gap-2'>
            <p className='text-base font-semibold text-gray-800'>Quantity:</p>
            <div className='flex gap-4 items-center'>
               <HiOutlineMinusCircle
                  size={22}
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className='hover:text-blue-500 cursor-pointer'
               />
               <p className='text-lg font-bold mx-6'>{quantity}</p>
               <HiOutlinePlusCircle
                  size={22}
                  onClick={() => setQuantity(quantity + 1)}
                  className='hover:text-blue-500 cursor-pointer'
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
