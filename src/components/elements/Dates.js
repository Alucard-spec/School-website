import React from 'react'

const Dates = () => {
  return (
    <div className=' w-fit p-2 bg-white border-black border-2'>
       <h3 className='text-lg mx-auto w-fit border-b-4 border-b-yellow-300 font-bold mb-4'> News and Events</h3>
        <div  className='md:w-[300px] w-[100%] h-[300px] overflow-y-auto pr-1 italic font-semibold '>
            <ul className='list-disc space-y-5 '>
               <li>1. Sunrise Academy Students Win National Science Olympiad</li>
               <li>2. Annual Sports Day at Sunrise Academy Celebrates Athletic Talent</li>
               <li>3. Cultural Fest at Sunrise Academy Showcases Diverse Student Talents</li>
               <li>4. Sunrise Academy Inaugurates New Science and Computer Labs</li>
               <li>5. Clean Green Mumbai Initiative Launched by Sunrise Academy</li>
               <li>6. Admissions Open for Sunrise Academy Academic Year 2024-25</li>
               <li>7. Debating Club of Sunrise Academy Wins State Championship</li>
               <li>8. Faculty Development Workshop Held at Sunrise Academy</li>

            </ul>

        </div>

    </div>
  )
}

export default Dates