import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram,} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import { CgDarkMode } from 'react-icons/cg'

const Main = () => {

    
  return (
   
    <div id='home' className='w-full h-screen text-center dark:bg-gray-900' >
            
    
        
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
              <p className='uppercase text-sm tracking-widest'>Lets buil something together</p>
              <h1 className='py-4 text-gray-700'>
                Hi, I am <span className='text-[#5651e5]'>Arber</span>
              </h1>
              <h1 className='py-2 text-gray-700'>
                A Software Developer
              </h1>
              <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                I amm a software developer specialiesed on building, designing, deployeing and maintaining Programs 
                using many different skills and tools. I build software systems that power networks, devices and
                ensure that those systems remain functional.
              </p>
             
              <div className='flex items- justify-between max-w-[330px] m-auto py-4  '>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <Link href="https://www.linkedin.com/in/arber-gashi-8625b8256" target="_blank">
                    <AiFillLinkedin size={40} 
                    /> 
                  </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <Link href="https://www.github.com/ArberGashi12" target="_blank">
                    <AiFillGithub size={40}/>
                  </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <Link href="https://www.facebook.com/arber.gashi.75873" target="_blank">
                    <BsFacebook size={40}/>
                    </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                   <Link  href="https://www.instagram.com/arbergashii1" target="_blank" class="fab fa-instagram">
                    <AiFillInstagram size={40}/>
                    </Link>
                </div>

              </div>
            </div>
        </div>
    </div>

  )
}

export default Main