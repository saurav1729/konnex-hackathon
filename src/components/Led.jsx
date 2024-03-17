"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Led = () => {
    const [color, setColor]=useState('#ff0000')

    
  return (
    <div className='w-[240px] bg-white rounded-xl p-4 flex flex-col items-center gap-3 bg-[white] h-[360px]'>
        <div className='font-popins font-bold text-black text-xl text-center my-2'>LED</div>
        <div className='font-popins text-sm text-black h-[30px]'>Control the color of led</div>
        <div className='flex justify-center items-center w-[60px] h-[60px] m-3'>
            <Image src='/images/led.png' height={100} width={100} className='h-100 w-100'/>
        </div>
        <div className='flex items-center justify-center gap-2'>
        
            <div className='rounded-md px-5 py-1 bg-color-1 w-[120px] mx-auto hover:bg-color-3'>
            <div className='flex flex-col justify-center items-center'>
                    <div className='text-xs font-popins flex justify-start'>Color:</div>
                    <div className={`text-sm font-popins flex justify-center h-4 w-4 mx-2 rounded-full bg-[${color}]`}>{color}</div>
                </div>
                {/* <button className={`rounded-full p-2 px-4 bg-color-1 ${speed===5?'opacity-50 cursor-not-allowed':'opacity:100 cursor-pointer'} `} onClick={handleClickPlus} disabled={speed===5?true:false}>+</button> */}
                
                
            </div>
            <div className='hover:bg-color-3 rounded-full p-2  bg-color-1 flex items-center justify-center'><input className='hover:bg-color-3 rounded-full h-6 w-6' value={color} type='color' onChange={(e)=>{
                    setColor(e.target.value);
                }}></input></div>
            
        </div>
            
    </div>
  )
}

export default Led;