import React from 'react';

interface circleBlobProps {
   color1: string;
   xPos: string;
   yPos: string;
   xMdPos?: string;
   delay?: string;
}

export default function CircleBlob({
   color1,
   xPos,
   yPos,
   xMdPos,
   delay,
}: circleBlobProps) {
   return (
      <div
         className={`absolute ${xPos} ${yPos} ${xMdPos} circle-wh-72 md:circle-wh-112 ${color1} rounded-full mix-blend-multiply filter blur-3xl animate-blob ${delay}`}
      />
      // <div
      //    className={`absolute top-44 right-16 md:-right-20 circle-wh-72 md:circle-wh-112 ${color2} rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000`}
      // />
      // <div
      //    className={`absolute top-8 right-0 md:left-64 circle-wh-72 md:circle-wh-112 ${color3} rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000`}
      // />
   );
}
