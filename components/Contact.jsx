import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import arberfotoo from "../public/arberfotoo.jpg";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import {BsFacebook} from 'react-icons/bs'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto py-16 w-full'>
       <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
        Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
        
        <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='lg:p-4 h-full'>
            <div>
              <Image className='rounded-xl hover:scale-105ease-in duration-300' src={arberfotoo} alt="" />
            </div>
            <div>
              <h2 className='py-2'>Arber Gashi</h2>
              <p>Software Developer</p>
              <p className='py-4'>I am available for freelance or full-time posistion. Contact me and let's talk. <span className='text-[#5651e5]'>(+383)045-957-728</span></p>
            </div>
          <div>
            <p className='uppercase pt-8'>Connect With Me</p>
            <div className='flex items-center justify-between py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursour-pointer hover:scale-110 ease-in duration-300'>
                  <Link href="https://www.linkedin.com/in/arber-gashi-8625b8256" target="_blank">
                    <AiFillLinkedin size={30} 
                    /> 
                  </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursour-pointer hover:scale-110 ease-in duration-300'>
                <Link href="https://www.github.com/ArberGashi12" target="_blank">
                    <AiFillGithub size={30}/>
                  </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursour-pointer hover:scale-110 ease-in duration-300'>
                <Link href="https://www.facebook.com/arber.gashi.75873" target="_blank">
                    <BsFacebook size={30}/>
                    </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursour-pointer hover:scale-110 ease-in duration-300'>
                <Link  href="https://www.instagram.com/arbergashii1" target="_blank" class="fab fa-instagram">
                    <AiFillInstagram size={30}/>
                    </Link>
                </div>
            </div>
           </div>
           </div>
        </div>

        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
           <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                 <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                    type="text"
                    />
                 </div>
                 <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                    type="text"
                    />
                 </div>
                 </div>
                 <div className='flex flex-col py-2'> 
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                    type="email"
                    />
                 </div>
                 <div className='flex flex-col py-2'> 
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                    type="text"
                    />
                 </div>
                 <div className='flex flex-col py-2'> 
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                 </div>
                 <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
              </form>
           </div>
        </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
          <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursour-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
            </div>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Contact;