'use client';
import { navLinks } from '@/lib/data';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';

export default function Menu() {
   const [dropdownMenu, setDropdownMenu] = useState(false);
   const { user } = useUser();

   return (
      <div>
         <div className='fixed top-5 right-14 lg:hidden flex gap-2 flex-center h-8 w-8 px-2 py-1 hover:text-blue-kz'>
            <IoMenu
               className='absolute cursor-pointer'
               onClick={() => setDropdownMenu(!dropdownMenu)}
            />
         </div>

         {dropdownMenu && (
            <div className='fixed top-16 right-14 flex flex-col gap-4 p-3 rounded-lg border bg-white dark:bg-surface-mixed-200 text-base-bold lg:hidden'>
               {navLinks.map((navLink, index) => (
                  <Link
                     key={index}
                     href={navLink.hash}
                     onClick={() => setDropdownMenu(!dropdownMenu)}
                  >
                     {navLink.name}
                  </Link>
               ))}
               <Link
                  href={user ? '/wishlist' : '/sign-in'}
                  onClick={() => setDropdownMenu(!dropdownMenu)}
                  className='hover:text-blue-kz'
               >
                  Wishlist
               </Link>
               <Link
                  href={user ? '/orders' : '/sign-in'}
                  onClick={() => setDropdownMenu(!dropdownMenu)}
                  className='hover:text-blue-kz'
               >
                  Orders
               </Link>
            </div>
         )}
      </div>
   );
}
