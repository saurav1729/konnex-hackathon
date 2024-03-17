"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Led = () => {
    const [color, setColor]=useState('#ff0000')

    
  return (
    <div className='w-[200px] bg-white rounded-xl p-4 flex flex-col items-center gap-3 bg-[white] '>
        <div className='font-popins font-bold text-black text-xl text-center my-2'>Fan</div>
        <div className='font-popins text-sm text-black '>Control the speed of the fan</div>
        <div className='flex justify-center items-center w-[60px] h-[60px] m-3'>
            <Image src='/images/led.png' height={100} width={100} className='h-100 w-100'/>
        </div>
        <div className='flex items-center justify-center gap-2'>
        
            <div className='rounded-md px-5 py-1 bg-color-1 w-[120px]'>
                <div className='flex'>
                    <div className='text-xs font-popins flex justify-start'>Color:</div>
                    <div className={`text-sm font-popins flex justify-center h-4 w-4 mx-2 rounded-full bg-[${color}]`}></div>
                </div>
                <div>
                <div className='text-xs font-popins flex justify-start'>Choose Color:</div>
                <div className='rounded-full'><input className='rounded-full' value={color} type='color' onChange={(e)=>{
                    setColor(e.target.value);
                }}></input></div>
                
                </div>
            </div>
            
        </div>
            
    </div>
  )
}

export default Led;