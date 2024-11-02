'use client';
import Image from 'next/image';
import React from 'react';
import logo from '@/public/assets/logo.png';
import useSectionInView from '@/lib/hooks/useSectionInView';

export default function About() {
   const { ref } = useSectionInView('About', 0.7);

   return (
      <section
         ref={ref}
         id='about'
         className='flex flex-col md:flex-row max-w-7xl w-full sm:my-14 p-4 md:justify-between items-center scroll-mt-10 sm:scroll-mt-44 '
      >
         <Image
            src={logo}
            alt='Kztudioz Logo'
            width={300}
            className='-mt-10 sm:mt-0 drop-shadow-custom  sm:w-[30rem]'
         />
         <div className='max-w-lg text-center sm:mr-20 '>
            <h3 className={`mb-4 sm:mb-8 font-bold text-xl sm:text-3xl text-white`}>
               Welcome to our Community!
            </h3>
            <p
               className={`mb-28 px-6 sm:mb-0 leading-relaxed text-gray-700 sm:text-base xl:text-xl`}
            >
               We specialize in creating unique, <span className=''>hand-drawn</span>{' '}
               stickers that add a personal touch to anything you stick them on.
               Crafted with love and care, our stickers are shipped within the US to
               ensure they reach you quickly and in perfect condition.{' '}
               <span className=''>Let our art bring a smile to your day!</span>
            </p>
         </div>
      </section>
   );
}
