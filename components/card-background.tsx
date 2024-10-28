import React from 'react';
import CircleBlob from './circle-blob';

const colors = [
   'bg-indigo-400/80',
   'bg-blue-300/80',
   'bg-pink-300/80',
   'bg-red-400/80',
   'bg-yellow-300/80',
   'bg-green-300/80',
   'bg-purple-300/80',
   'bg-teal-300/80',
];

function getRandomColor() {
   return colors[Math.floor(Math.random() * colors.length)];
}

export default function CardBackground() {
   return (
      <div className='absolute inset-0 -z-10 rounded-lg overflow-hidden'>
         {/* <div className='absolute top-32 w-full max-w-2xl -z-10'> */}
         <CircleBlob
            color1={getRandomColor()}
            xPos='-left-4'
            yPos='top-0'
            xMdPos='md:-left-10'
         />
         <CircleBlob
            color1={getRandomColor()}
            xPos='right-16'
            yPos='top-44'
            xMdPos='md:-right-30'
            delay='animation-delay-2000'
         />
         <CircleBlob
            color1={getRandomColor()}
            xPos='right-0'
            yPos='top-8'
            xMdPos='md:left-64'
            delay='animation-delay-4000'
         />
         {/* </div> */}
         {/* <div className='absolute top-80 right-0 w-full max-w-2xl -z-10'> */}
         <CircleBlob
            color1={getRandomColor()}
            xPos='-left-4'
            yPos='top-0'
            xMdPos='md:-left-10'
         />
         <CircleBlob
            color1={getRandomColor()}
            xPos='right-16'
            yPos='-top-40'
            xMdPos='md:-right-30'
            delay='animation-delay-2000'
         />
         <CircleBlob
            color1={getRandomColor()}
            xPos='right-0'
            yPos='top-8'
            xMdPos='md:left-64'
            delay='animation-delay-4000'
         />
         {/* </div> */}
      </div>
   );
}
