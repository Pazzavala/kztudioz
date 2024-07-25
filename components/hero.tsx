'use client';

import React from 'react';
import Image from 'next/image';

import logo from '@/public/assets/logo.png';
import useSectionInView from '@/lib/hooks';

export default function Hero() {
    const { ref } = useSectionInView('Home', 0.5);

    return (
        <section id='home' ref={ref} className='z-[999]'>
            <div>
                <Image
                    src={logo}
                    alt='Kzstudio Logo'
                    width={182}
                    // height={80}
                    quality={95}
                    priority={true}
                    // object-cover will perserve ratio
                    // className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                />
            </div>
        </section>
    );
}
