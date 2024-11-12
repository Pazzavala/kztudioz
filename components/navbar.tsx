'use client';
import { useActiveSectionContext } from '@/context/active-section-context';
import { navLinks } from '@/lib/data';
import { useUser } from '@clerk/nextjs';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
   const { user } = useUser();
   const { activeSection, setActiveSection, setTimeOfLastClick } =
      useActiveSectionContext();

   return (
      <div className='relative z-[99]'>
         {/* Transparent Background */}
         {/* bg-black/15 bg-gray-300/20 text-gray-800 */}
         <motion.div
            className='fixed top-0 lg:top-[4.12rem] left-1/2 h-[4.5rem] lg:h-9 w-full lg:w-[33rem] rounded-none bg-gray-50/30 text-gray-800 border-gray-400 border-opacity-20 shadow-lg shadow-black/10 backdrop-blur-md lg:rounded-full'
            initial={{ y: 100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
         />

         <nav
            className={`hidden fixed lg:flex top-3 left-1/2 h-12 -translate-x-1/2 py-2 lg:top-16 lg:h-[initial] lg:py-0 text-sm lg:text-base`}
         >
            <ul className='flex flex-wrap lg:flex-nowrap w-[22rem] lg:w-[initial] items-center justify-center gap-y-1 sm:gap-5 '>
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
                           'flex w-full items-center p-2 justify-center hover:text-blue-kz text-sm lg:text-base transition',
                           {
                              'text-white': activeSection === navLink.name,
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
                              className='absolute bg-blue-kz rounded-full inset-0 -z-10 text-blue-kz'
                           />
                        )}
                     </Link>
                  </motion.li>
               ))}

               <Link
                  href={user ? '/wishlist' : '/sign-in'}
                  className={clsx(
                     'flex w-full items-center p-2 justify-center hover:text-blue-kz transition',
                     {
                        'text-blue-kz': activeSection === 'Wishlist',
                     }
                  )}
               >
                  Wishlist
               </Link>
               <Link
                  href={user ? '/orders' : '/sign-in'}
                  className={clsx(
                     'flex w-full items-center p-2 justify-center hover:text-blue-kz transition',
                     {
                        'text-blue-kz': activeSection === 'Orders',
                     }
                  )}
               >
                  Orders
               </Link>
            </ul>
         </nav>
      </div>
   );
}
