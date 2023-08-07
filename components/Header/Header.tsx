'use client';
import React, { FC } from 'react';
import { BsFacebook,BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

type Props ={
    isSticky:boolean;
}

const Header:FC<Props> = ({isSticky}) => {
    const goToSection =(sectionName:string)=>{
        const scrollSection = document.getElementById(sectionName);
        if (scrollSection) {
          scrollSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className='grid grid-cols-9 px-12 h-20 items-center bg-black text-white '>
            <div className='col-span-2 cursor-pointer' onClick={()=>goToSection("home")}>Saddam</div>
            <div className='col-span-5 flex gap-6'>
                <a onClick={()=>goToSection("home")} className='cursor-pointer' >Home</a>
                <a onClick={()=>goToSection("about")} className='cursor-pointer'>About</a>
                <a onClick={()=>goToSection("Ido")} className='cursor-pointer'>What I Do</a>
                <a onClick={()=>goToSection("resume")}  className='cursor-pointer'>Resume</a>
                <a onClick={()=>goToSection("portfolio")} className='cursor-pointer'>Portfolio</a>
                <a onClick={()=>goToSection("client")} className='cursor-pointer'>Client</a>
                <a onClick={()=>goToSection("contact")} className='cursor-pointer' >Contact</a>
            </div>
            <div className='col-span-2 flex gap-4'>
                <a>
                 <BsFacebook  className={` ${isSticky ? 'text-white' :'text-black'} `} />
                </a>
                <a>
                 <AiFillLinkedin  className={` ${isSticky ? 'text-white' :'text-black'} `} />
                </a>
                <a>
                 <BsGithub  className={` ${isSticky ? 'text-white' :'text-black'} `} />
                </a>
            </div>
            
        </div>
    );
};

export default Header;