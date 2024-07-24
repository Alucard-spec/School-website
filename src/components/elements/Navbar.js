import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isClose,setIsClose] = useState(true);

    let mobileNav=()=>{
        setIsClose(!isClose);
    }

  return (
    <div>

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

            <div className='hover:text-white hover:bg-black transition-all duration-75 p-4 cursor-pointer  rounded-xl'>Home</div>
            <div className='hover:text-white hover:bg-black transition-all duration-75 p-4 cursor-pointer  rounded-xl'>About Us</div>
            <div className='hover:text-white hover:bg-black transition-all duration-75 p-4  cursor-pointer rounded-xl'>Curriculum</div>
            <div className='hover:text-white hover:bg-black transition-all duration-75 p-4 cursor-pointer  rounded-xl'>Admission</div>
            <div className='hover:text-white hover:bg-black transition-all duration-75 p-4 cursor-pointer  rounded-xl'>Contact</div>


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
            <div className='mx-auto'>Home</div>
            <div className='mx-auto'>About Us</div>
            <div className='mx-auto'>Curriculum</div>
            <div className='mx-auto'>Admission</div>
            <div className='mx-auto'>Contact</div>

        </div>

        </div>


    </div>
  )
}

export default Navbar