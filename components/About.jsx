import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import generatecv from '../public/assets/generatecv.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I gained knowledge in building mobile responsive front-end applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript,
            React(next)js, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>
          I started software development in 2021
          learning java and then developing e-commerce websites. Then continuing to learn javascript frameworks like (react, next, vue).js.
          And continuing with c#, .net web api. In my spare time i like to watch shorts on Youtube or just chill Playing ps5.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center  hover:scale-125 ease-in duration-700'>
          <Image src={generatecv} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;