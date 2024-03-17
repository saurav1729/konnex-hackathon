import React from 'react'
import bulbImage from '../../public/images/bulb.png'

const Bulb = () => {
  return (
    <div className='w-[200px] h-[50px] bg-[#ffffff90] rounded-md p-4'>
        <div className='font-popins font-bold text-black text-xl text-center my-3'>Bulb</div>
        <div className='font-popins font-semibold text-black '>Turn on or off the bulb</div>
        <img src={bulbImage} className='h-[20px] w-[20px]'></img>
    </div>
  )
}

export default Bulb