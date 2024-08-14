'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoCart, IoSearch } from 'react-icons/io5';
import Image from 'next/image';
import logo from '@/public/assets/logo.png';
import Navbar from './navbar';

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (s: any) => {
        setSearchQuery(s.target.value);
    };

    const handleSearchSubmit = (s: any) => {
        s.preventDefault();
    };

    return (
        <header className='flex max-w-[87rem] w-full mx-auto px-4 justify-between items-center md:-mt-[7.25rem]'>
            {/* Logo */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className='relative md:static z-[9999] items-center cursor-pointer'
            >
                <a href='/'>
                    <Image
                        src={logo}
                        alt='Kzstudio Logo'
                        width={120}
                        quality={95}
                        priority={true}
                        className='hidden sm:block fixed ml-1 md:ml-0 -top-2 left-0 md:static w-[4rem] md:w-36 drop-shadow-custom-md'
                    />
                </a>
            </motion.div>

            <Navbar />

            {/* Search Bar and cart */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className='relative md:flex gap-2 h-10 items-center text-gray-700 dark:text-gray-100 sm:text-lg z-[9999] md:-mt-3'
            >
                <form className='flex items-center shadow-lg shadow-black/10 rounded-full '>
                    <input
                        onInput={handleSearchChange}
                        type='text'
                        placeholder='Search...'
                        className='hidden md:block h-8 px-2 py-1 w-36 md:w-32 rounded-l-full text-sm focus:outline-none bg-gray-200 bg-opacity-50 dark:bg-white dark:bg-opacity-10 border border-gray-300 border-opacity-40 md:backdrop-blur-md'
                    />
                    <button
                        onClick={handleSearchSubmit}
                        type='submit'
                        className='fixed md:static top-5 right-1 h-8 px-2 py-1 rounded-full md:rounded-none md:rounded-r-full md:bg-gray-200 dark:bg-white dark:bg-opacity-10 md:hover:bg-blue-kz md:bg-opacity-50 md:border border-gray-300 border-opacity-40 md:backdrop-blur-md text-[#5278C] hover:text-white transition'
                    >
                        <IoSearch className='text-lg' />
                    </button>
                </form>
                <button className='fixed md:static top-5 right-8 h-8 px-2 py-1 rounded-full md:bg-gray-200 md:hover:bg-kzBlue md:bg-opacity-50 md:border dark:bg-white dark:bg-opacity-10 border-gray-300 border-opacity-40 md:shadow-lg shadow-black/10 md:backdrop-blur-md text-[#5278C] hover:text-white transition'>
                    <IoCart className='text-lg' />
                </button>
            </motion.div>
        </header>
    );
}
