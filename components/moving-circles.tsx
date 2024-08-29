import React from 'react';

export default function MovingCircles() {
  return (
    <div className='absolute top-32 w-full max-w-lg z-10'>
      <div className='absolute top-0 -left-4 md:-left-10 circle-wh-72 md:circle-wh-112 bg-indigo-400/80 rounded-full mix-blend-multiply filter blur-xl animate-blob' />
      <div className='absolute top-44 right-16 md:-right-20 circle-wh-72 md:circle-wh-112 bg-blue-300/80 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000' />
      <div className='absolute top-8 right-0 md:left-48 circle-wh-72 md:circle-wh-112 bg-pink-300/80 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000' />
    </div>
  );
}
