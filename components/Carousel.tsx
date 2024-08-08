import React, { useState } from 'react';
import { BiChevronLeft, BiChevronLeftCircle } from 'react-icons/bi';
import { FiChevronLeft } from 'react-icons/fi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

type carouselProps = {
    slides: any;
    autoSlide: boolean;
};

export default function Carousel({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
}: any) {
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    return (
        <div className='overflow-hidden relative'>
            <div
                className='flex transition-transform ease-out duration-500'
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides}
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button onClick={prev}>
                    <HiChevronLeft
                        size={40}
                        className='p-1 rounded-full shadow bg-white/80 hover:bg-whit text-gray-800'
                    />
                </button>
                <button onClick={next}>
                    <HiChevronRight
                        size={40}
                        className='p-1 rounded-full shadow bg-white/80 hover:bg-whit text-gray-800'
                    />
                </button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((_: any, i: number) => (
                        <div
                            className={`transition-all w-3 h-3 bg-white rounded-full ${
                                curr === i ? 'p4' : 'bg-opacity-50'
                            }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
