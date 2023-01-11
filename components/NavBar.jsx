import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai'
import arberavatar from "../public/arberavatar.png";
import {BsFacebook} from 'react-icons/bs'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')

    

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

  return (
   
    <div className={shadow ? 'fixed w-full h-20 shadow-xl bg-slate-100 z-[100]' : 'fixed w-full h-20  z-[100]'}>
        <div className=' flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/' >
            <Image 
           src={arberavatar}
           alt="Arber"
           width="94"
           
           />
            </Link>
          
           

           <div>
            <ul className=' hidden md:flex'>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='/#about'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link href='/#skills'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                
                <Link href='/#contact'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={25} />
               
                
            
            </div>
           
            
           </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ' : ''}>
        <div className={nav ? 'bg-gradient-to-br from-teal-50 rounded fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0   ease-in duration-500'}>
            <div>
                <div className=' flex w-full items-center justify-between'>
                    <Image
                    src={arberavatar}
                    alt="/"
                    width="120"
                   
                    />
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursour-pointer'>
                        <AiOutlineClose/>
                        
                    </div>

                </div>
                <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together </p>
                </div>
            </div>
            <div className='py-4 flex-col'>
                <ul className='uppercase'>
                    <Link href='/'>
                    <li className='py-4 text-sm'>Home</li>
                    </Link>
                    <Link href='/#about'>
                    <li className='py-4 text-sm'>About</li>
                    </Link>
                    <Link href='/#skills'>
                    <li className='py-4 text-sm'>Skills</li>
                    </Link>
                    
                    <Link href='/#contact'>
                    <li className='py-4 text-sm'>Contact</li>
                    </Link>
                </ul>
                <div className='pt-40'>
                   <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect
                   </p>
                   <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link href="https://www.linkedin.com/in/arber-gashi-8625b8256" target="_blank">
                    <AiFillLinkedin size={30} 
                    /> 
                  </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link href="https://www.github.com/ArberGashi12" target="_blank">
                    <AiFillGithub size={30}/>
                  </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link href="https://www.facebook.com/arber.gashi.75873" target="_blank">
                    <BsFacebook size={30}/>
                    </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link  href="https://www.instagram.com/arbergashii1" target="_blank" class="fab fa-instagram">
                    <AiFillInstagram size={30}/>
                    </Link>
                    </div>
                   </div>
                  
                </div>
            </div>
        </div>
        </div>
        </div>
    
       
  )
}

export default NavBar