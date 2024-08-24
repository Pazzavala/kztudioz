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
import Menu from './Menu';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const { user } = useUser();
  const router = useRouter();
  const cart = useCart();

  // const handleSearchChange = (s: any) => {
  //    setSearchQuery(s.target.value);
  // };

  // const handleSearchSubmit = (s: any) => {
  //    s.preventDefault();
  // };

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
            className='block fixed -ml-3 lg:ml-0 -top-2  lg:static w-[4.5rem] lg:w-36 drop-shadow-custom-md'
          />
        </Link>
      </motion.div>

      <Navbar />

      {/* Search Bar and cart */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className='relative md:flex gap-2 h-10 items-center text-gray-700 dark:text-gray-100 sm:text-lg z-[999] md:-mt-3'
      >
        {/* Search could do right 1/2 */}
        <div className='fixed top-5 right-[8.5rem] lg:static flex items-center lg:shadow-lg shadow-black/10 rounded-full text-gray-500 lg:text-white'>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type='text'
            placeholder='Search...'
            className='h-8 px-2 py-1 w-28 lg:w-32 rounded-l-full text-sm focus:outline-none lg:bg-gray-200 lg:bg-opacity-50 dark:bg-white dark:bg-opacity-60 lg:dark:bg-opacity-10 lg:border-b border-gray-300 border-opacity-40 backdrop-blur-md'
          />
          <button
            disabled={searchQuery === ''}
            onClick={() => router.push(`/search/${searchQuery}`)}
            className='flex flex-center h-8 px-2 py-1 rounded-none rounded-r-full bg-gray-200 dark:bg-white dark:bg-opacity-60 lg:dark:bg-opacity-10  hover:bg-blue-kz bg-opacity-50 border border-gray-300 border-opacity-40 backdrop-blur-md text-[#5278C] hover:text-white transition'
          >
            <IoSearch className='text-lg' />
          </button>
        </div>

        {/* Cart */}
        <Link
          href={'/cart'}
          className='fixed top-5 right-24 lg:static flex gap-2 flex-center h-8 px-2 py-1 rounded-full lg:bg-gray-200 lg:dark:bg-white lg:dark:bg-opacity-10 lg:hover:bg-blue-kz lg:bg-opacity-50 lg:border border-gray-300 border-opacity-40 lg:backdrop-blur-md text-[#5278C] hover:text-white transition'
        >
          <IoCart
            size={20}
            className='text-lg'
          />
          <p className='hidden xl:block text-base font-semibold'>
            Cart {cart.cartItems.length}
          </p>
        </Link>

        {/* Menu */}
        <Menu />

        {user ? (
          <div className='fixed top-[1.35rem] right-5  lg:static'>
            <UserButton />
          </div>
        ) : (
          <Link
            href={'/sign-in'}
            className='fixed top-5 right-5 lg:static flex flex-center h-8 px-2 py-2 rounded-full lg:bg-gray-200 dark:bg-white dark:bg-opacity-10 lg:hover:bg-blue-kz lg:bg-opacity-50 lg:border border-gray-300 border-opacity-40 lg:backdrop-blur-md text-[#5278C] hover:text-white transition'
          >
            <FaUser
              size={15}
              className=''
            />
          </Link>
        )}
      </motion.div>
    </header>
  );
}
