import React from 'react';

export default function MovingCircles() {
  return (
    <div className='absolute top-32 w-full max-w-lg'>
      <div className='absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob' />
      <div className='absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000' />
      <div className='absolute top-16 left-28 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000' />
    </div>
  );
}
