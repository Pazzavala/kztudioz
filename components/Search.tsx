'use client';
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

export default function Search() {
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
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type='text'
        placeholder='Search...'
        className='h-8 px-2 py-1 w-28 lg:w-32 rounded-l-full text-sm focus:outline-none bg-none lg:bg-gray-400/10 dark:bg-white/20 border-gray-400 border-opacity-20 backdrop-blur-md'
      />
      <button
        disabled={searchQuery === ''}
        onClick={() => router.push(`/search/${searchQuery}`)}
        className='flex flex-center h-8 px-2 py-1 rounded-none rounded-r-full bg-none lg:bg-gray-400/10 dark:bg-white/20 border-gray-400 border-opacity-20 backdrop-blur-md text-[#5278C] hover:bg-blue-kz hover:text-white transition'
      >
        <IoSearch className='text-lg' />
      </button>
    </div>
  );
}
