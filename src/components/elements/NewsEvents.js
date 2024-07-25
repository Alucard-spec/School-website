import React from 'react'

const NewsEvents = () => {
  return (
    <div className=' md:w-fit p-2 bg-white border-2 border-black'>
       <h3 className='text-lg border-b-4 border-b-yellow-300 mx-auto font-bold mb-4 w-fit'> Important Dates</h3>
        <div  className='md:w-[300px] w-[100%] h-[300px] overflow-y-auto pr-1 italic font-semibold'>
            <ul className='list-disc space-y-5 '>
               <li>1. Admission forms available - June 25, 2024 </li>
               <li>2. Submissions Deadline - August 25, 2024</li>
               <li>3. Entrance Test - August 30, 2024</li>
               <li>4. Interview Dates - September 4 to September 10, 2024</li>
               <li>5. Admission Result Announcement - September 12, 2024</li>
               <li>6. Enrollment Confirmation Deadline - September 30, 2024</li>
               
            </ul>

        </div>

    </div>
  )
}

export default NewsEvents