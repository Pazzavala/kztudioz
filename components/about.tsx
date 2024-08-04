'use client';
import Image from 'next/image';
import React from 'react';
import logo from '@/public/assets/logo.png';
import useSectionInView from '@/lib/hooks';
import { Inter, Itim, Molle, Montserrat, Signika } from 'next/font/google';
import { SiNike } from 'react-icons/si';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const itim = Itim({ weight: '400', subsets: ['latin'] });
const molle = Molle({ weight: '400', subsets: ['latin'] });
const signika = Signika({ weight: '400', subsets: ['latin'] });

export default function About() {
    const { ref } = useSectionInView('About', 0.7);

    return (
        <section
            ref={ref}
            id='about'
            className='flex flex-col sm:flex-row max-w-7xl w-full sm:my-14 p-4 sm:justify-between items-center scroll-mt-10 sm:scroll-mt-44 '
        >
            <Image
                src={logo}
                alt='Kztudioz Logo'
                width={300}
                className='-mt-10 sm:mt-0 drop-shadow-custom  sm:w-[30rem]'
            />
            <div className='max-w-lg text-center sm:mr-20 '>
                <h3
                    className={`${signika.className} mb-4 sm:mb-8 font-black text-xl sm:text-4xl text-[#5278C3]`}
                >
                    Welcome to our Community!
                </h3>
                <p
                    className={`${inter.className} mb-28 sm:mb-0 leading-relaxed text-gray-800 sm:text-xl`}
                >
                    We specialize in creating unique,{' '}
                    <span className=''>hand-drawn</span> stickers that add a
                    personal touch to anything you stick them on. Crafted with
                    love and care, our stickers are shipped within the US to
                    ensure they reach you quickly and in perfect condition.{' '}
                    {/* <br />
                    <br /> */}
                    <span className=''>
                        Let our art bring a smile to your day!
                    </span>
                </p>
                {/* <h3 className='mb-4 font-bold text-2xl text-[#5278C3]'>
                    {' '}
                    Welcome to the KZtudioz community!
                </h3>
                <p>
                    I'm Karla Zavala, the artist behind every unique, hand-drawn
                    sticker you'll find here. Each design is a labor of love,
                    crafted to bring a touch of whimsy and personality to your
                    everyday items. From laptops to water bottles, my stickers
                    are here to make your world a little more colorful. Shipped
                    from within the US, these little pieces of art are ready to
                    spark joy in your life. Let's celebrate creativity together,
                    one sticker at a time!
                </p> */}
            </div>
        </section>
    );
}
