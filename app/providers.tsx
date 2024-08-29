'use client';
import React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { ClerkProvider } from '@clerk/nextjs';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ToasterProvider from '@/lib/providers/ToasterProvider';

export default function Providers({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <NextUIProvider>
         <ClerkProvider>
            <ToasterProvider />
            <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
         </ClerkProvider>
      </NextUIProvider>
   );
}
