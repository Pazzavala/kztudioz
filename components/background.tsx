import React from 'react';
import MovingCircles from './moving-circles';
export default function Background() {
   return (
      <div className='absolute inset-0 -z-10 overflow-hidden dark:bg-surface-mixed-100'>
         <MovingCircles
            color1='bg-indigo-400/80'
            color2='bg-blue-300/80'
            color3='bg-pink-300/80'
         />
         {/* <MovingCircles
            color1='bg-indigo-400/80'
            color2='bg-blue-300/80'
            color3='bg-pink-300/80'
         /> */}
      </div>
   );
}
