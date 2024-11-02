'use client';
import useSectionInView from '@/lib/hooks/useSectionInView';
import React from 'react';

import { motion } from 'framer-motion';
import { sendEmail } from '@/lib/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
   const { ref } = useSectionInView('Contact');

   return (
      <motion.section
         ref={ref}
         id='contact'
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1 }}
         viewport={{ once: true }}
         className='w-[min(100%,40rem)] p-4 text-center'
      >
         {/* font-sedgwick-ave-display */}
         <h1 className='text-white text-3xl sm:text-5xl font-bold mb-6'>
            Contact Me
         </h1>
         <p className='text-gray-800  text-base'>
            Please contact me directly at{' '}
            <a href='mailto:kzztudioz@gmail.com' className='underline'>
               kzztudioz@gmail.com
            </a>{' '}
            or through this form.
         </p>
         <form
            action={async (formData) => {
               const { data, error } = await sendEmail(formData);

               if (error) {
                  toast.error(error);
                  return;
               }

               toast.success('Email sent successfully!');
            }}
            className='flex flex-col my-10'
         >
            <input
               type='email'
               name='senderEmail'
               maxLength={500}
               placeholder='Your email'
               className='h-14 px-4 rounded-lg border border-black/30'
               required
            />
            <textarea
               name='message'
               maxLength={5000}
               placeholder='Your message'
               className='h-52 my-3 p-4 rounded-lg border border-black/30'
               required
            />
            <SubmitBtn />
         </form>
      </motion.section>
   );
}
