'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';
import { IoCart, IoSearch } from 'react-icons/io5';
import Image from 'next/image';

import { navLinks } from '@/lib/data';
import logo from '@/public/assets/logo.png';
import { useActiveSectionContext } from '@/context/active-section-context';
import { Inter, Itim, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const itim = Itim({ weight: '400', subsets: ['latin'] });

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();

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
                <Image
                    src={logo}
                    alt='Kzstudio Logo'
                    width={120}
                    quality={95}
                    priority={true}
                    className='hidden sm:block fixed ml-1 md:ml-0 -top-2 left-0 md:static w-[4rem] md:w-36 drop-shadow-custom-md'
                />
            </motion.div>

            {/* Nav Bar */}
            <div className='relative z-[999]'>
                <motion.div
                    className='fixed top-0 md:top-16 left-1/2 h-[4.5rem] md:h-11 w-full md:w-[23rem] rounded-none bg-gray-200 bg-opacity-50 border border-gray-300 border-opacity-40 shadow-lg shadow-black/10 backdrop-blur-md md:rounded-full'
                    initial={{ y: 100, x: '-50%', opacity: 0 }}
                    animate={{ y: 0, x: '-50%', opacity: 1 }}
                />

                <nav
                    className={`${inter.className} fixed flex top-3 left-1/2 h-12 -translate-x-1/2 py-2 md:top-16 md:h-[initial] md:py-0`}
                >
                    <ul className='flex flex-wrap md:flex-nowrap w-[22rem] md:w-[initial] items-center justify-center gap-y-1 sm:gap-5'>
                        {navLinks.map((navLink, index) => (
                            <motion.li
                                key={index}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className='relative flex h-3/4 items-center justify-center'
                            >
                                <Link
                                    href={navLink.hash}
                                    onClick={() => {
                                        setActiveSection(navLink.name);
                                        setTimeOfLastClick(Date.now());
                                    }}
                                    className={clsx(
                                        'flex w-full items-center p-2 justify-center text-gray-800 hover:text-[#5278C3] text-sm sm:text-lg transition',
                                        {
                                            'text-[#5278C3]':
                                                activeSection === navLink.name,
                                        }
                                    )}
                                >
                                    {navLink.name}
                                    {navLink.name === activeSection && (
                                        <motion.span
                                            layoutId='activeSection'
                                            transition={{
                                                type: 'spring',
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                            className='absolute bg-white rounded-full inset-0 -z-10 text-[#5278C3]'
                                        />
                                    )}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Search Bar and cart */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className='relative md:flex gap-2 h-10 items-center text-gray-700 z-[9999] md:-mt-3'
            >
                <form className='flex items-center shadow-lg shadow-black/10 rounded-full '>
                    <input
                        onInput={handleSearchChange}
                        type='text'
                        placeholder='Search...'
                        className='hidden md:block h-8 px-2 py-1 w-36 md:w-32 rounded-l-full text-sm focus:outline-none bg-gray-200 bg-opacity-50 border border-gray-300 border-opacity-40 md:backdrop-blur-md'
                    />
                    <button
                        onClick={handleSearchSubmit}
                        type='submit'
                        className='fixed md:static top-5 right-1 h-8 px-2 py-1 rounded-full md:rounded-none md:rounded-r-full md:bg-gray-200 md:hover:bg-[#5278C3] md:bg-opacity-50 md:border border-gray-300 border-opacity-40 md:backdrop-blur-md text-[#5278C] hover:text-white transition'
                    >
                        <IoSearch className='text-lg' />
                    </button>
                </form>
                <button className='fixed md:static top-5 right-8 h-8 px-2 py-1 rounded-full md:bg-gray-200 md:hover:bg-[#5278C3] md:bg-opacity-50 md:border border-gray-300 border-opacity-40 md:shadow-lg shadow-black/10 md:backdrop-blur-md text-[#5278C] hover:text-white transition'>
                    <IoCart className='text-lg' />
                </button>
            </motion.div>
        </header>
    );
}
