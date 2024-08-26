import React from 'react';
import MovingCircles from './MovingCircles';
export default function Background() {
  return (
    <div className='absolute inset-0 -z-10 overflow-hidden dark:bg-surface-mixed-100'>
      <MovingCircles />
    </div>
  );
}

// <div className='absolute bg-gray-50 dark:bg-surface-100 text-gray-950 -z-10 flex w-full h-full'>
//    <div className='bg-[#fbe2e3] absolute top-0 sm:top-[-6rem] -z-10 right-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-primary-400' />
//    <div className='bg-[#dbd7fb] absolute top-0 sm:top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-primary-500' />
//    <div className='bg-[#fbe2e3] absolute bottom-0 sm:bottom-[-1rem] -z-10 right-[1rem] h-[32rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-primary-400' />
//    <div className='bg-[#dbd7fb] absolute bottom-0 sm:bottom-[-1rem] -z-10 left-[-35rem] h-[32rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-primary-500' />
// </div>
