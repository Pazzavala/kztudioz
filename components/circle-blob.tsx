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
   );
}
