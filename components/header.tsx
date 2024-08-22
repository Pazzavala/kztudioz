'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoCart, IoMenu, IoSearch } from 'react-icons/io5';
import Image from 'next/image';
import { UserButton, useUser } from '@clerk/nextjs';
import logo from '@/public/assets/logo.png';
import Navbar from './navbar';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import useCart from '@/lib/hooks/useCart';
import { useRouter } from 'next/navigation';
import { navLinks } from '@/lib/data';

export default function Header() {
   // const pathname = usePathname();
   const [searchQuery, setSearchQuery] = useState('');
   const { user } = useUser();
   const router = useRouter();
   const cart = useCart();
   const [dropdownMenu, setDropdownMenu] = useState(false);

   // const handleSearchChange = (s: any) => {
   //    setSearchQuery(s.target.value);
   // };

   // const handleSearchSubmit = (s: any) => {
   //    s.preventDefault();
   // };

   return (
      <header className='flex max-w-[87rem] w-full mx-auto px-4 justify-between items-center md:-mt-[7.25rem]'>
         {/* Logo */}
         <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='relative md:static z-[9999] items-center cursor-pointer'
         >
            <Link href='/'>
               <Image
                  src={logo}
                  alt='Kzstudio Logo'
                  width={120}
                  quality={95}
                  priority={true}
                  className='hidden sm:block fixed ml-1 md:ml-0 -top-2 left-0 md:static w-[4rem] md:w-36 drop-shadow-custom-md'
               />
            </Link>
         </motion.div>

         <Navbar />

         {/* Search Bar and cart */}
         <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='relative md:flex gap-2 h-10 items-center text-gray-700 dark:text-gray-100 sm:text-lg z-[9999] md:-mt-3'
         >
            <div className='flex border border-gray-300 items-center shadow-lg shadow-black/10 rounded-full '>
               <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type='text'
                  placeholder='Search...'
                  className='hidden lg:block h-8 px-2 py-1 w-36 md:w-32 rounded-l-full text-sm focus:outline-none bg-gray-200 bg-opacity-50 dark:bg-white dark:bg-opacity-10 border border-gray-300 border-opacity-40 md:backdrop-blur-md'
               />
               <button
                  disabled={searchQuery === ''}
                  onClick={() => router.push(`/search/${searchQuery}`)}
                  className='fixed top-5 right-24 md:static flex justify-center items-center h-8 px-2 py-1 rounded-full lg:rounded-none lg:rounded-r-full md:bg-gray-200 dark:bg-white dark:bg-opacity-10 md:hover:bg-blue-kz md:bg-opacity-50 md:border border-gray-300 border-opacity-40 md:backdrop-blur-md text-[#5278C] hover:text-white transition'
               >
                  <IoSearch className='text-lg' />
               </button>
            </div>
            <Link
               href={'/cart'}
               className='fixed top-5 right-[8.6rem] md:static flex gap-2 justify-center items-center  h-8 px-2 py-1 rounded-full md:bg-gray-200 dark:bg-white dark:bg-opacity-10 md:hover:bg-blue-kz md:bg-opacity-50 md:border border-gray-300 border-opacity-40 md:backdrop-blur-md text-[#5278C] hover:text-white transition'
            >
               <IoCart className='text-lg' />
               <p className='hidden md:block text-base font-semibold'>
                  Cart {cart.cartItems.length}
               </p>
            </Link>

            <div className='fixed top-5 right-14 md:static flex gap-2 justify-center items-center h-8 w-8 px-2 py-1 rounded-full md:bg-gray-200 dark:bg-white dark:bg-opacity-10 md:hover:bg-blue-kz md:bg-opacity-50 md:border border-gray-300 border-opacity-40 md:backdrop-blur-md text-[#5278C] hover:text-white transition lg:hidden'>
               <IoMenu
                  className='absolute cursor-pointer lg:hidden '
                  onClick={() => setDropdownMenu(!dropdownMenu)}
               />
            </div>

            {dropdownMenu && (
               <div className='fixed top-16 right-14 flex flex-col gap-4 p-3 rounded-lg border bg-white dark:bg-surface-mixed-200 text-base-bold lg:hidden'>
                  {navLinks.map((navLink, index) => (
                     <Link key={index} href={navLink.hash}>
                        {navLink.name}
                     </Link>
                  ))}
                  <Link
                     href={user ? '/wishlist' : '/sign-in'}
                     className='hover:text-red-1'
                  >
                     Wishlist
                  </Link>
                  <Link
                     href={user ? '/orders' : '/sign-in'}
                     className='hover:text-red-1'
                  >
                     Orders
                  </Link>
               </div>
            )}
            {user ? (
               <div className='fixed top-[1.35rem] right-5  md:static'>
                  <UserButton />
               </div>
            ) : (
               <Link
                  href={'/sign-in'}
                  className='fixed top-5 right-5 md:static flex justify-center items-center h-8 px-2 py-2 rounded-full md:bg-gray-200 dark:bg-white dark:bg-opacity-10 md:hover:bg-blue-kz md:bg-opacity-50 md:border border-gray-300 border-opacity-40 md:backdrop-blur-md text-[#5278C] hover:text-white transition'
               >
                  <FaUser size={15} className='' />
               </Link>
            )}
         </motion.div>
      </header>
   );
}
