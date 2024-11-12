'use client';
import Link from 'next/link';
import React from 'react';
import { FaUser } from 'react-icons/fa';

export default function UserSigninButton() {
   return (
      <Link
         href={'/sign-in'}
         className='hidden fixed top-5 right-9 p-[0.69rem] lg:static lg:flex flex-center rounded-full lg:bg-gray-50/50 hover:bg-white/90 lg:border transition'
      >
         <FaUser size={18} className='hidden lg:block text-gray-700' />
      </Link>
   );
}
