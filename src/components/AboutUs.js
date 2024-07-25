import React from 'react'

const AboutUs = () => {
  return (
    <div className='mx-5 mb-6'>
      <div className='md:relative bg-black   '>
      <img src={require("./elements/images/teacher-min.jpg")} alt="" className=' md:w-[100%] md:h-[100%] md:object-cover max-h-[500px]'/>
      
      <div className='p-5 text-sm md:text-xl lg:text-2xl  font-bold italic rounded-xl md:absolute top-0 z-10 md:mx-20 flex items-center text-white '> <div>Founded in 1995, Sunrise Academy has grown from a small community school to a renowned institution known for its commitment to academic excellence and student development. Over the years, we have expanded our campus and introduced innovative teaching methodologies to keep pace with the changing educational landscape.
        <br />
        <div><span className='text-yellow-400 text-3xl'>Our Vision</span> <p>To be a leading educational institution that empowers students to excel academically, creatively, and socially, preparing them to be responsible global citizens.</p></div>
        <div><span className='text-yellow-400 text-3xl '>Our Mission</span> <p>To provide a high-quality education that inspires students to pursue knowledge, develop critical thinking skills, and engage in lifelong learning while promoting values of respect, integrity, and community service.</p></div></div>
         </div>
      <div className='w-[100%] h-[100%] md:absolute top-0 left-0 bg-black opacity-70'></div></div>
      <div className='mt-5 lg:flex mx-5'>
      <div className='md:text-xl text-lg' >
      <div className='font-bold text-xl md:text-2xl border-b-4 border-yellow-300 w-fit '>Infrastructure and facilities</div>
        <div>
          <ul className='list-disc list-inside mt-2 font-semibold italic space-y-4'>
        <li>State-of-the-art classrooms with smart boards and projectors</li>
<li>Science and computer laboratories</li>
<li>Library with a vast collection of books and digital resources</li>
<li>Sports facilities including a swimming pool, basketball court, and football field</li>
<li>Art and music studios</li>
<li>Cafeteria serving nutritious meals</li>
<li>On-campus medical center</li>
<li>Transportation services</li></ul>
        </div>
      </div>
      <br />

      <div className='md:text-xl text-lg' >
      <div className='font-bold text-xl md:text-2xl border-b-4 border-yellow-300 w-fit '>Faculty Profiles</div>
        <div>
          <ul className='list-disc list-inside mt-2 font-semibold italic space-y-4'>
        <li><span className='font-bold text-green-900 font-mono'>Dr. Priya Sharma (Principal)</span>: Ph.D. in Education, 20 years of experience</li>
        <li><span className='font-bold text-green-900 font-mono'>Mr. Arvind Patel (Head of Institution)</span>: M.A. in English, 25 years of experience</li>
        <li><span className='font-bold text-green-900 font-mono'>Mrs. Anjali Mehta (Science Teacher)</span>: M.Sc. in Physics, 10 years of experience</li>
        <li><span className='font-bold text-green-900 font-mono'>Ms. Kavita Rao (Mathematics Teacher)</span>:M.Sc. in Mathematics, 8 years of experience</li>
        <li><span className='font-bold text-green-900 font-mono'>Mr. Rajesh Singh (Physical Education Teacher)</span>: B.P.Ed., 5 years of experience</li>
        <li><span className='font-bold text-green-900 font-mono'>Mrs. Radhika Kapoor (Art Teacher)</span>: M.F.A., 7 years of experience</li>
</ul>
        </div>
      </div>
      </div>
      
    </div>
    
  )
}

export default AboutUs