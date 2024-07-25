import React from 'react'

const Image = ({path}) => {
  return (
    <div className='w-fit text-center'>
    <div className='  w-[200px] h-[200px]'>
      <img src={require(`${path}`)} alt="" className='object-cover w-[100%] h-[100%]' />
      </div>
    
      </div>
  )
}

export default Image