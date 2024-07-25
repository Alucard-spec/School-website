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
    <div className='p-2 md:mx-5 mt-7 md:flex   md:gap-3 md:space-y-0 space-y-4 justify-evenly '>
    <NewsEvents/>
    <Dates/>
    
    
    </div>
    </div>
  )
}

export default Home