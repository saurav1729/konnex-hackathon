"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Fan = () => {
    const [speed, setSpeed]=useState(0)

    const handleClickPlus=()=>{
        if(speed<5){
            setSpeed((val)=>(val+1));
        }
    }
    const handleClickMinus=()=>{
        if(speed>0){
            setSpeed((val)=>(val-1));
        }
    }
  return (
    <div className='w-[240px] h-[360px] bg-white rounded-xl p-4 flex flex-col items-center gap-3 bg-[white] '>
        <div className='font-popins font-bold text-black text-xl text-center my-2'>Fan</div>
        <div className='font-popins text-sm text-black h-[30px]'>Control the speed of the fan</div>
        <div className='flex justify-center items-center w-[60px] h-[60px] m-3'>
            <Image src='/images/fan.png' height={100} width={100} className='h-100 w-100'/>
        </div>
        <div className='flex items-center justify-center gap-2'>
        <button className={`rounded-full p-2 px-4 bg-color-1 ${speed===0?'opacity-50 cursor-not-allowed':'opacity:100 cursor-pointer hover:bg-color-3'}  `} onClick={handleClickMinus} disabled={speed===0?true:false}>-</button>
            <div className='rounded-md px-5 py-1 bg-color-1 w-[120px] mx-auto hover:bg-color-3'>
                <div className='flex flex-col justify-center items-center '>
                    <div className='text-xs font-popins flex justify-start '>Speed:</div>
                    <div className='text-sm font-popins flex justify-center '>{speed}</div>
                </div>
            </div>
            <button className={`rounded-full p-2 px-4 bg-color-1 ${speed===5?'opacity-50 cursor-not-allowed':'opacity:100 cursor-pointer hover:bg-color-3'}  `} onClick={handleClickPlus} disabled={speed===5?true:false}>+</button>
        </div>
            
    </div>
  )
}

export default Fan;