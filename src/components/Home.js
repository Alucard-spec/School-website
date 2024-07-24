import React from 'react'
import { FaRegSun } from "react-icons/fa6";
import Carousel from './elements/Carousel';
import Navbar from './elements/Navbar';
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
    <div className='mt-4'>
      
      

        {/* Carousel */}
    <Carousel/>
    </div>
    {/* Brief Description */}

    <div>
    Sunrise Academy is dedicated to nurturing young minds and fostering academic excellence, creativity, and holistic development. We provide a vibrant learning environment that encourages students to explore their passions and achieve their fullest potential.
    </div>

    </div>
  )
}

export default Home