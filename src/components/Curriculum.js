import React from 'react'

const Curriculum = () => {
  return (
    <div className='mx-5 mb-5'>
       <div className='text-xl md:text-2xl font-bold w-fit border-b-4 border-yellow-400'>Curriculum Information</div> 
       
        <div>
            <table className='border-separate border-spacing-y-5 border-spacing-1 md:border-spacing-5 mx-auto md:text-lg'>
                <tr className='bg-yellow-200'>
                <th>Standard</th>
                <th className=' md:w-[600px]'>Subjects</th>
                </tr>
                <tr >
                    <th>Primary (Grades 1-5)</th>
                    <td>English, Mathematics, Science, Social Studies, Physical Education, Art, Music</td>
                </tr>
                
                <tr>
                    <th>Secondary (Grade 6-10)</th>
                    <td>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies (History, Geography, Civics), Computer Science, Physical Education, Art, Music, Second Language (Hindi/French/Spanish)</td>
                </tr>
                <tr>
                    <th>Senior Secondary (Grades 11-12)</th>
                    <td><span className='font-semibold'>Science Stream</span>: Physics, Chemistry, Biology/Mathematics, English, Computer Science <br />
                    <span className='font-semibold'>Commerce Stream</span>: Economics, Business Studies, Accountancy, Mathematics/Information Practices, English</td>
                </tr>
            </table>
        </div>
        <br />
        <div >
        <div className='text-xl md:text-2xl mb-3 font-bold w-fit border-b-4 border-yellow-400'>Student Life</div > 
        <div className='md:text-lg max-w-[800px] mx-auto'>
            <ul className='space-y-5 list-disc list-inside'>
                <li>
                    <span className='font-bold '>Extracurricular Activities</span>:
                    Drama club, Debate club, Science club, Art club, Music band
                </li>
                <li>
                    <span className='font-bold '>Sports Teams</span>:
                    Football, Basketball, Swimming, Athletics
                </li>
                <li>
                    <span className='font-bold '>Societies</span>:
                    Environmental club, Coding club, Literary society
                </li>
                <li>
                    <span className='font-bold '>Annual Events</span>:
                    Sports Day, Cultural Fest, Science Fair, Art Exhibition
                </li>

            </ul>
        </div>
        </div>
        <br />
        <div >
        <div className='text-xl md:text-2xl font-bold w-fit border-b-4 border-yellow-400 mb-3'>Achievements and Accolades</div> 
        <div className='md:text-lg max-w-[800px] mx-auto'>
            <ul className='space-y-5 list-disc list-inside'>
                <li>
                Students have won national and international science competitions
                </li>
                <li>
                School football team won the inter-school championship for three consecutive years
                </li>
                <li>
                Drama club received the best performance award at the state level
                </li>
                

            </ul>
        </div>
        </div>
        
    </div>
  )
}

export default Curriculum