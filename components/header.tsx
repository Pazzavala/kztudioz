'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';
import { IoSearch } from 'react-icons/io5';
import Image from 'next/image';

import { navLinks } from '@/lib/data';
import logo from '@/public/assets/logo.png';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();

    return (
        <header className='z-[999] relative mb-10'>
            <motion.div
                className='fixed top-0 sm:top-14 left-1/2 h-[4.5rem] sm:h-10 w-full sm:w-[21rem] rounded-none bg-gray-300 bg-opacity-50 border border-gray-300 border-opacity-40 shadow-lg shadow-black/10 backdrop-blur-sm  sm:rounded-full'
                initial={{ y: 100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
            />

            <nav className='fixed flex top-1 left-1/2 h-12 -translate-x-1/2 py-2 sm:top-14 sm:h-[initial] sm:py-0'>
                <ul className='flex flex-wrap sm:flex-nowrap w-[22rem] sm:w-[initial] items-center justify-center gap-y-1 sm:gap-5'>
                    {navLinks.map((navLink, index) => (
                        <motion.li
                            key={index}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className='relative flex h-3/4 items-center justify-center'
                        >
                            {' '}
                            <Link
                                href={navLink.hash}
                                onClick={() => {
                                    setActiveSection(navLink.name);
                                    setTimeOfLastClick(Date.now());
                                }}
                                className={clsx(
                                    'flex w-full items-center p-2 justify-center text-gray-800 hover:text-[#5278C3] text-sm sm:text-base transition',
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
        </header>
    );
}
