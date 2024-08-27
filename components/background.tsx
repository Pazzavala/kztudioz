import React from 'react';
import MovingCircles from './MovingCircles';
export default function Background() {
   return (
      <div className='absolute inset-0 -z-10 overflow-hidden dark:bg-surface-mixed-100'>
         <MovingCircles />
      </div>
   );
}
