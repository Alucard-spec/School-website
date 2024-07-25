import React from 'react'

import Carousel from './elements/Carousel';


import NewsEvents from './elements/NewsEvents';
import Dates from './elements/Dates';

const Home = () => {

    
  return (


    <div className='m-5'>
    
    <div>
      
      

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