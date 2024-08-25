import React from 'react';
export default function Background() {
   return (
      <div className='absolute bg-gray-50 dark:bg-surface-100 text-gray-950 -z-10 flex w-full h-full'>
         <div className='bg-[#fbe2e3] absolute top-0 sm:top-[-6rem] -z-10 right-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-primary-400' />
         <div className='bg-[#dbd7fb] absolute top-0 sm:top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-primary-500' />
         <div className='bg-[#fbe2e3] absolute bottom-0 sm:bottom-[-1rem] -z-10 right-[1rem] h-[32rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-primary-400' />
         <div className='bg-[#dbd7fb] absolute bottom-0 sm:bottom-[-1rem] -z-10 left-[-35rem] h-[32rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-primary-500' />
      </div>
      // <div className='absolute w-full h-full -z-10 dark:bg-surface-100'>
      //    <div className='bg-[#fbe2e3] absolute top-0 right-0 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-primary-400' />
      //    <div className='bg-[#dbd7fb] absolute top-0 left-0 h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[33rem] lg:left-[28rem] xl:left-[15rem] 2xl:left-[5rem] dark:bg-primary-500' />
      //    <div className='bg-[#fbe2e3] absolute bottom-0 right-0 h-[32rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-primary-400' />
      //    <div className='bg-[#dbd7fb] absolute bottom-0 left-0 h-[32rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[33rem] lg:left-[28rem] xl:left-[15rem] 2xl:left-[5rem] dark:bg-primary-500' />
      // </div>
   );
}
