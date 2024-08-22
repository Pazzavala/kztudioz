'use client';
import useCart from '@/lib/hooks/useCart';
import Link from 'next/link';
import { useEffect } from 'react';

export default function SuccessfulPayment() {
   const cart = useCart();

   useEffect(() => {
      cart.clearCart();
   }, []);

   return (
      <div className='h-screen flex flex-col justify-start items-center gap-5'>
         <div className='bg-white p-10 flex flex-col gap-5 rounded-lg text-center'>
            <p className='text-2xl font-bold text-green-500'>Successful Payment</p>
            <p>Thank you for your purchase!</p>
            <Link
               href={'/'}
               className='p-4 border text-base font-bold hover:bg-black hover:text-white text-center'
            >
               Continue Shopping
            </Link>
         </div>
      </div>
   );
}

export const dynamic = 'force-dynamic';
