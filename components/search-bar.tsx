'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IoSearch } from 'react-icons/io5';

export default function SearchBar() {
   const router = useRouter();
   const [searchQuery, setSearchQuery] = useState<string>('');
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const inputRef = useRef<HTMLDivElement>(null);

   const handleSearchSubmit = () => {
      if (searchQuery.trim()) {
         router.push(`/search/${searchQuery}`);
         setIsOpen(false);
         setSearchQuery('');
      }
   };

   const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
         setIsOpen(false);
      }
   };

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <div
         ref={inputRef}
         //
         className='fixed top-5 right-16 lg:relative lg:top-0 lg:-right-1 flex items-center'
      >
         <input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none ${
               isOpen ? 'w-52 sm:w-64' : 'w-0 opacity-0'
            }`}
            placeholder='Search...'
            onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
            onFocus={() => setIsOpen(true)}
         />
         <button
            onClick={() => setIsOpen(!isOpen)}
            className='absolute right-0 p-2.5 m-[.2rem] lg:bg-gray-300/20 bg-transparent lg:border focus:border-none rounded-full focus:outline-none'
         >
            <IoSearch size={20} className='text-lg' />
         </button>
      </div>
   );
}
