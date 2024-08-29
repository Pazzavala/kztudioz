'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { UserButton, useUser } from '@clerk/nextjs';
import logo from '@/public/assets/logo.png';
import Navbar from './navbar';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import Menu from './menu';
import SearchBar from './search-bar';
import CartButton from './cart-button';

export default function Header() {
   const { user } = useUser();

   return (
      <header className='flex max-w-[87rem] w-full mx-auto px-4 justify-between items-center'>
         {/* Logo */}
         <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='relative md:static z-[999] items-center cursor-pointer'
         >
            <Link href='/'>
               <Image
                  src={logo}
                  alt='Kzstudio Logo'
                  width={120}
                  quality={95}
                  priority={true}
                  className='block fixed -ml-3 lg:ml-0 -top-2 p-2 lg:static w-[4.5rem] lg:w-36 drop-shadow-custom-md'
               />
            </Link>
         </motion.div>

         <Navbar />

         {/* Search Bar, cart, login */}
         <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='relative flex gap-2 h-10 flex-center text-gray-500 dark:text-gray-100 sm:text-lg z-[999] md:-mt-3'
         >
            <SearchBar />
            <CartButton />
            <Menu />

            {user ? (
               <div className='hidden lg:block fixed top-[1.35rem] right-5 lg:static'>
                  <UserButton />
               </div>
            ) : (
               <Link
                  href={'/sign-in'}
                  className='hidden fixed top-5 right-5 lg:static lg:flex flex-center h-9 p-2.5 rounded-full lg:bg-white dark:bg-opacity-10 lg:hover:bg-blue-kz lg:bg-opacity-50 lg:border border-opacity-40 lg:backdrop-blur-md text-[#5278C] hover:text-white transition'
               >
                  <FaUser size={15} className='' />
               </Link>
            )}
         </motion.div>
      </header>
   );
}
