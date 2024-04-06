"use client";
import React, { useState } from "react";
import AnimatedText from "../atoms/AnimatedText";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className='bg-stone-900 h-screen flex items-center'>
      <div className='flex flex-col container '>
        <AnimatedText
          className='text-5xl mb-4 font-semibold text-stone-100'
          text='Hello, I am'
          semanticType='h4'
        />
        <AnimatedText
          className='text-9xl mb-6 font-bold text-stone-100'
          text='Quentin Chown'
          semanticType='h1'
        />
        <AnimatedText
          className='text-5xl font-semibold text-stone-100'
          text='Creative Developer'
          semanticType='h4'
        />
      </div>
    </div>
  );
};

export default Hero;
