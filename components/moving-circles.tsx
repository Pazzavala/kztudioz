import React from 'react';

interface movingCirclesProps {
   color1: string;
   color2: string;
   color3: string;
}

export default function MovingCircles({
   color1,
   color2,
   color3,
}: movingCirclesProps) {
   return (
      <div className='absolute top-32 w-full max-w-lg xl:ml-48 z-10'>
         <div
            className={`absolute top-0 -left-4 md:-left-10 circle-wh-72 md:circle-wh-112 ${color1} rounded-full mix-blend-multiply filter blur-xl animate-blob`}
         />
         <div
            className={`absolute top-44 right-16 md:-right-20 circle-wh-72 md:circle-wh-112 ${color2} rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000`}
         />
         <div
            className={`absolute top-8 right-0 md:left-64 circle-wh-72 md:circle-wh-112 ${color3} rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000`}
         />
      </div>
   );
}
