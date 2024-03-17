"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { GiPowerButton } from "react-icons/gi";

const AirConditioner = () => {
    const [temperature, setTemperature]=useState(16)
    const [state, setState]=useState(0);

    const handleClick=()=>{
        if(state===0){
            setState(1);
        }
        else{
            setState(0);
        }
    }

    const handleClickPlus=()=>{
        if(temperature<30){
            setTemperature((val)=>(val+1));
        }
    }
    const handleClickMinus=()=>{
        if(temperature>16){
            setTemperature((val)=>(val-1));
        }
    }
  return (
    <div className='w-[240px] bg-white rounded-xl p-4 flex flex-col items-center gap-3 bg-[white] h-[360px]'>
        <div className='font-popins font-bold text-black text-xl text-center my-2'>Air Conditioner</div>
        <div className='font-popins text-sm text-black text-center h-[30px]'>Control state and temperature of Air Conditioner</div>
        <div className='flex justify-center items-center w-[60px] h-[60px] m-3'>
            <Image src='/images/ac.png' height={100} width={100} className='h-100 w-100'/>
        </div>
     <div className='flex items-center justify-center gap-2'>
        <button className={`rounded-full p-2 px-4 opacity-50 cursor-not-allowed':'opacity:100  `} ></button>
        <div className='rounded-md px-5 py-1 bg-color-1 w-[120px] mx-auto'>
        <div className='flex flex-col justify-center items-center'>
                    <div className='text-xs font-popins flex justify-start'>State:</div>
                    <div className='text-sm font-popins flex justify-center'>{state===0?'Off':'On'}</div>
                </div>
            </div>
            <button className={`rounded-full p-2 px-4 bg-color-1 opacity:100 cursor-pointer `} onClick={handleClick} ><GiPowerButton/></button>
        </div> 
        <div className='flex items-center justify-center gap-2'>
        <button className={`rounded-full p-2 px-4 bg-color-1 ${temperature===16?'opacity-50 cursor-not-allowed':'opacity:100 cursor-pointer'} `} onClick={handleClickMinus} disabled={temperature===16?true:false}>-</button>
            <div className='rounded-md px-5 py-1 bg-color-1 w-[120px] mx-auto'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-xs font-popins flex justify-start'>Temperature:</div>
                    <div className='text-sm font-popins flex justify-center'>{temperature}</div>
                </div>
            </div>
            <button className={`rounded-full p-2 px-4 bg-color-1 ${temperature===30?'opacity-50 cursor-not-allowed':'opacity:100 cursor-pointer'} `} onClick={handleClickPlus} disabled={temperature===30?true:false}>+</button>
        </div>
            
    </div>
  )
}

export default AirConditioner;