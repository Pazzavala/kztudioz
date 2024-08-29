import useCart from '@/lib/hooks/useCart';
import Link from 'next/link';
import React from 'react';
import { IoCart } from 'react-icons/io5';

export default function CartButton() {
   const cart = useCart();

   return (
      <Link
         href={'/cart'}
         className='fixed top-5 right-24 lg:static flex flex-center h-9 p-2.5 rounded-full lg:bg-white lg:dark:bg-opacity-10 lg:border border-opacity-40 lg:backdrop-blur-md text-[#5278C] hover:text-white transition'
      >
         <IoCart size={20} className='text-lg' />
         <p className='hidden xl:block text-base font-semibold'>
            Cart {cart.cartItems.length}
         </p>
      </Link>
   );
}
