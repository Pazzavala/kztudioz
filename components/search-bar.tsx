'use client';
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
   const router = useRouter();
   const [searchQuery, setSearchQuery] = useState('');

   // const handleSearchChange = (s: any) => {
   //    setSearchQuery(s.target.value);
   // };

   // const handleSearchSubmit = (s: any) => {
   //    s.preventDefault();
   // };
   return (
      <div className='fixed top-5 right-[8.5rem] lg:static flex items-center lg:shadow-lg shadow-black/10 rounded-full text-black dark:text-white'>
         <form className='relative mx-auto w-max z-40'>
            <input
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               type='text'
               placeholder='Search...'
               className='relative h-12 w-12 rounded-full border bg-white pl-12 outline-none focus:w-full focus:cursor-text focus:border-blue-kz focus:pl-16 focus:pr-4 transition'
            />
            <button
               disabled={searchQuery === ''}
               onClick={() => router.push(`/search/${searchQuery}`)}
               className='absolute inset-0 my-auto h-8 w-12 flex flex-center border-r border-transparent'
            >
               <IoSearch className='text-lg text-gray-500 ' />
            </button>
         </form>
      </div>
   );
}
