import React from 'react'
import Fan from './Fan'
import Bulb from './Bulb'

const Tools = () => {
  return (
    <div>
        <div className='max-w-7xl bg-color-1 mx-auto p-4 '>
        <div className='text-xl font-popins font-bold text-center my-4'>Our Services</div>
        <div className='flex flex-wrap justify-center items-center max-w-6xl mx-auto'>
            <Fan/>
            <Bulb/>
        </div>

        </div>
    </div>
  )
}

export default Tools