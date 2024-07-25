import React from 'react'
import { FaRegSun } from "react-icons/fa6";
import Carousel from './elements/Carousel';
import Navbar from './elements/Navbar';
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import NewsEvents from './elements/NewsEvents';
import Dates from './elements/Dates';

const Home = () => {

    
  return (


    <div className='m-5'>
    {/* Name of the school */}
    <div className='text-2xl md:text-4xl 
    w-fit 
    mx-auto
    font-semibold
    gap-3
    flex 
    justify-between 
    items-end
    '>Sunrise Academy <FaRegSun fill='red'/></div>
    <div className='mt-4'>
    <Navbar/>
    </div>

    {/* Contact info */}
    <div className='flex text-lg my-3 gap-2 md:flex-row lg:gap-5 justify-evenly flex-col text-center'>
     <div className='flex items-center gap-1'><FaPhoneAlt/> +201 878 734 383</div>
     <div className='flex items-center gap-1'><FaPhoneAlt/> +201 174 234 233</div>
     <div className='flex items-center gap-1'>
     <SiGmail color='red'/> sunrise.academy@gmail.com
     </div>
    </div>
    <div className='mt-4'>
      
      

        {/* Carousel */}
    <Carousel/>
    </div>
    {/*News and Events */}
    <div className='p-2 md:mx-5 mt-7 flex flex-col md:flex-row gap-3 justify-evenly lg:bg-yellow-200'>
    <Dates/>
    <NewsEvents/>
    
    </div>
    </div>
  )
}

export default Home