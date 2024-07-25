import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [isClose,setIsClose] = useState(true);

    let mobileNav=()=>{
        setIsClose(!isClose);
    }

  return (
    <div className='md:mx-5'>

        {/* For Desktop */}
        <div className='bg-yellow-200
         rounded-md
        md:flex
        text-lg
        lg:text-xl 
        gap-4 
        justify-between
        hidden
        font-semibold
        '>

<Link to="/"><div className='hover:text-white hover:bg-black transition-all duration-75 p-4 cursor-pointer  rounded-xl'>  
                Home
                </div></Link>
                <Link to="/aboutUs"> <div className='hover:text-white hover:bg-black transition-all duration-75 p-4 cursor-pointer  rounded-xl'>
               About Us

            </div></Link>
            <Link to="/curriculum"><div className='hover:text-white hover:bg-black transition-all duration-75 p-4  cursor-pointer rounded-xl'>Curriculum</div></Link>
            <Link to="/admission"><div className='hover:text-white hover:bg-black transition-all duration-75 p-4 cursor-pointer  rounded-xl'>Admission</div></Link>
            <Link to="/gallery"><div className='hover:text-white hover:bg-black transition-all duration-75 p-4 cursor-pointer  rounded-xl'>Gallery</div></Link>


        </div>

        {/* For Mobile */}

        <div className='md:hidden'>
        <div className='cursor-pointer' onClick={mobileNav}>
        <div className={`${isClose?"":"hidden"}`}  >
        <IoIosMenu size={32}/>

        </div>

        <div className={`${!isClose?"":"hidden"}`} >
        <IoMdClose size={32}/>
        </div>
        </div>

        <div className={`${isClose?"flex flex-col bg-yellow-200 transition-all gap-3 font-semibold h-0 box-border overflow-hidden":"flex flex-col bg-yellow-200 transition-all  gap-3 font-semibold p-4 duration-150 box-border overflow-hidden"}`}>
        <Link to="/" ><div className='mx-auto w-fit' onClick={mobileNav}>Home</div></Link>
        <Link to="/aboutUs"><div className='mx-auto w-fit' onClick={mobileNav}>About Us</div></Link>
            <Link to="/curriculum"><div className='mx-auto w-fit' onClick={mobileNav}>Curriculum</div></Link>
            <Link to="/admission"><div className='mx-auto w-fit' onClick={mobileNav}>Admission</div></Link>
            <Link to="/gallery"><div className='mx-auto w-fit' onClick={mobileNav}>Gallery</div></Link>

        </div>

        </div>


    </div>
  )
}

export default Navbar