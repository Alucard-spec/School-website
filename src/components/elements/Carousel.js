
    import React, { useState, useEffect } from 'react';
    import { motion } from 'framer-motion';
 
    
    const Carousel = ({ interval = 3000 }) => {
        let images=[];
        images.push("./images/1 (1).jpg");
        images.push("./images/2 (1).jpg");
        images.push("./images/3 (1).jpg");
        images.push("./images/4 (1).jpg");
        images.push("./images/5_1.jpg");
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);
    
        return () => clearInterval(timer);
      }, [images.length, interval]);
    
      return (
        <div>
          <motion.div
            className="flex w-[100%] "
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.2}}
            
          >
           <div className="w-[100%] md:px-5 shrink-0 h-[200px] sm:h-[300px] md:h-[500px]" >
                <img className='w-[100%] h-[100%] object-cover' src={require(`${images.at(0)}`)} alt={`Slide 1`} />
              </div>
              <div className="w-[100%] px-5 shrink-0 h-[200px] sm:h-[300px] md:h-[500px]" >
                <img className='w-[100%] h-[100%] object-cover' src={require(`${images.at(1)}`)} alt={`Slide 2`} />
              </div>
              <div className="w-[100%] px-5 shrink-0 h-[200px] sm:h-[300px] md:h-[500px]" >
                <img className='w-[100%] h-[100%] object-cover' src={require(`${images.at(2)}`)} alt={`Slide 3`} />
              </div>
              <div className="w-[100%] px-5 shrink-0 h-[200px] sm:h-[300px] md:h-[500px]" >
                <img className='w-[100%] h-[100%] object-cover' src={require(`${images.at(3)}`)} alt={`Slide 4`} />
              </div>
              <div className="w-[100%] px-5 shrink-0 h-[200px] sm:h-[300px] md:h-[500px]" >
                <img className='w-[100%] h-[100%] object-cover' src={require(`${images.at(4)}`)} alt={`Slide 5`} />
              </div>

          </motion.div>
        </div>
      );
    };
    
    export default Carousel;
    