import React from 'react';
import CircleBlob from './circle-blob';
export default function Background() {
   return (
      <div className='absolute inset-0 -z-10 overflow-hidden'>
         <div className='absolute top-32 w-full max-w-2xl xl:ml-48 z-10'>
            <CircleBlob
               color1='bg-indigo-400/80'
               xPos='-left-4'
               yPos='top-0'
               xMdPos='md:-left-10'
            />
            <CircleBlob
               color1='bg-blue-300/80'
               xPos='right-16'
               yPos='top-44'
               xMdPos='md:-right-30'
               delay='animation-delay-2000'
            />
            <CircleBlob
               color1='bg-pink-300/80'
               xPos='right-0'
               yPos='top-8'
               xMdPos='md:left-64'
               delay='animation-delay-4000'
            />
         </div>
      </div>
   );
}
