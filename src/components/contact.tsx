'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import { Typography, Button } from "@material-tailwind/react";
import React from "react";
// import Hero from "@/components/hero";
// import AboutEvent from "@/components/about-event";

export type FormData = {
  name: string;
  email: string;
  message: string;
};



const Contact: FC = () => {
  const { register, handleSubmit} = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <>
    {/* FAQ Section */}
    <section className="py-8 px-8 lg:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Typography variant="h1" color="blue-gray" className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }} {...({} as any)}>
            Contact Us
          </Typography>
        </div>
      </div>
    </section>


    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-3'>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-black'
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <br>
      </br>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-black'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-black'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className="bg-black text-white hover:bg-gray-800 transition-all duration-500 ease-in-out transform hover:scale-105 mt-8 rounded-md py-3 px-8 font-semibold">
          SUBMIT
        </button>

      </div>
    </form>

    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    
    
    </>
  );
};

export default Contact;


