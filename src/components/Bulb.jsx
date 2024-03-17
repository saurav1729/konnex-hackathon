"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { GiPowerButton } from "react-icons/gi";

const Bulb = () => {
    // const [temperature, setTemperature]=useState(16)
    const [state, setState]=useState(0);

    const handleClick=()=>{
        if(state===0){
            setState(1);
        }
        else{
            setState(0);
        }
    }

   
  return (
    <div className='w-[240px] bg-white rounded-xl p-4 flex flex-col items-center gap-3 bg-[white] h-[360px]'>
        <div className='font-popins font-bold text-black text-xl text-center my-2'>Bulb</div>
        <div className='font-popins text-sm text-black text-center h-[30px]'>Turn on or off the bulb</div>
        <div className='flex justify-center items-center w-[60px] h-[60px] m-3'>
            <Image src='/images/bulb.png' height={100} width={100} className='h-100 w-100'/>
        </div>
     <div className='flex items-center justify-center gap-2'>
        <button className={`rounded-full p-2 px-4 opacity-50 cursor-not-allowed':'opacity:100  `} ></button>
        <div className='rounded-md px-5 py-1 bg-color-1 w-[120px] mx-auto hover:bg-color-3'>
        <div className='flex flex-col justify-center items-center'>
                    <div className='text-xs font-popins flex justify-start'>State:</div>
                    <div className='text-sm font-popins flex justify-center'>{state===0?'Off':'On'}</div>
                </div>
            </div>
            <button className={`rounded-full p-3  bg-color-1 opacity:100 cursor-pointer hover:bg-color-3 `} onClick={handleClick} ><GiPowerButton/></button>
        </div> 
       
            
    </div>
  )
}

export default Bulb;