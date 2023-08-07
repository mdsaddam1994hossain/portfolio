"use client"
import { toast,ToastContainer } from 'react-toastify'
import About from '@/components/About'
import Client from '@/components/Client'
import Contact from '@/components/Contact'
import Portfolio from '@/components/Portfolio'
import Resume from '@/components/Resume'
import WhatIDo from '@/components/WhatIDo'

import Image from 'next/image'


export default function Home() {
  const notify = () => toast("Wow so easy!");

  const showNotification = ()=>{
    toast('🦄 Wow so easy!', {
      position: "top-center",
      type:"warning",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
    <div style={{backgroundImage:`url(/img/rd-cruse4.jpg)`,width:"100%",height:"100vh", backgroundAttachment: "fixed"}} className='bg-cover -mt-20'>

       <div id='home' className='pt-20 flex justify-center items-center' style={{minHeight:"100vh"}}>
        

        <div>
        <button onClick={showNotification} className='px-20 py-2 rounded-full bg-slate-800 hover:bg-slate-900 text-white'>Show Notification</button>
        </div>
     
       </div>


       

       <About />
       <WhatIDo />
       <Resume />
       <Portfolio />
       <Client />
       <Contact />
       <ToastContainer />
     </div>
  )
}
