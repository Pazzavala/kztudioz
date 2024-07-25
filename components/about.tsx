'use client';
import Image from 'next/image';
import React from 'react';

import logo from '@/public/assets/logo.png';
import useSectionInView from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView('About');

    return (
        <section
            ref={ref}
            id='about'
            className='flex my-16 p-4 gap-16 justify-center items-center max-w-[50rem] scroll-mt-20'
        >
            <Image src={logo} alt='Kztudioz Logo' width={300} />
            <div>
                <h3 className='mb-4 font-bold text-2xl text-[#5278C3]'>
                    Hello and welcome to our company!
                </h3>
                <p>
                    We specialize in creating unique,{' '}
                    <span className=''>hand-drawn</span> stickers that add a
                    personal touch to anything you stick them on. Crafted with
                    love and care, our stickers are shipped within the US to
                    ensure they reach you quickly and in perfect condition. Let
                    our art bring a smile to your day!
                </p>
            </div>
        </section>
    );
}
