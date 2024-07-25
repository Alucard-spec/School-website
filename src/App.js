import React from "react";
import {Routes, Route} from  'react-router-dom'
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

import { FaRegSun } from "react-icons/fa6";

import Navbar from './components/elements/Navbar';
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Curriculum from "./components/Curriculum";
import Admission from "./components/Admission";

function App() {
  return (
    <div className="">
      <div className='mb-5'>
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
    

    {/* Contact info */}
    <div className='flex text-lg my-3 gap-2 md:flex-row lg:gap-5 justify-evenly flex-col text-center'>
     <div className='flex items-center gap-1'><FaPhoneAlt/> +201 878 734 383</div>
     <div className='flex items-center gap-1'><FaPhoneAlt/> +201 174 234 233</div>
     <div className='flex items-center gap-1'>
     <SiGmail color='red'/> sunrise.academy@gmail.com
     </div>
    </div>
    <div className='mt-4'>
    <Navbar/>
    </div>
    </div>

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/aboutUs" element={<AboutUs/>}/>
    <Route path="/curriculum" element={<Curriculum/>}/>
    <Route path="/admission" element={<Admission/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
