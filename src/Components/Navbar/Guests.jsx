import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
const Guests = () => {
    useGSAP(()=>(
        gsap.from(".load",{
            x:-100,
            duration:0.4
        })
    ))
    const [adult, setAdult] = useState(0)
    const [child, setChild] = React.useState(0);
    const [infant, setInfant] = React.useState(0);
    const addAdult = () =>{
        setAdult(adult+1)
    }
    const remAdult = () =>{
        if (adult>0){
            setAdult(adult-1)
        }
    }
    const addChild = () =>{
        setChild(child+1)
    }
    const remChild = () =>{
        if (child>0){
            setChild(child-1)
        }
    }
    const addInfant = () =>{
        setInfant(infant+1)
    }
    const remInfant = () =>{
        if (infant>0){
            setInfant(infant-1)
        }
    }
  return (
    <div className='pl-[50%] -mt-2 h-screen w-screen load select-none'>
      <div className='w-[54%] shadow-lg shadow-black/20 rounded-3xl h-60'>
        <div className='p-7 flex flex-col gap-5'>
            <div className='flex flex-row justify-between border-b border-black/10'>
                <div className='flex flex-col pb-5'>
                    <h1 className='text-sm font-semibold'>Adults</h1>
                    <h1 className='text-[11px] text-black/50'>Age 13 years or above</h1>
                </div>
                <div className='flex flex-row gap-2'>
                    <div onClick={remAdult} className='w-6 h-6 items-center flex justify-center p-1 bg-black/5 rounded-full'>
                        <Minus size={13} />
                    </div>
                    <div>
                        <h1>{adult}</h1>
                    </div>
                    <div onClick={addAdult} className='w-6 h-6 items-center flex justify-center p-1 bg-black/10 rounded-full'>
                        <Plus size={13} />
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between border-b border-black/10'>
                <div className='flex flex-col pb-5'>
                    <h1 className='text-sm font-semibold'>Children</h1>
                    <h1 className='text-[11px] text-black/50'>Age 2-12</h1>
                </div>
                <div className='flex flex-row gap-2'>
                    <div onClick={remChild} className='w-6 h-6 items-center flex justify-center p-1 bg-black/5 rounded-full'>
                        <Minus size={13} />
                    </div>
                    <div>
                        <h1>{child}</h1>
                    </div>
                    <div onClick={addChild} className='w-6 h-6 items-center flex justify-center p-1 bg-black/10 rounded-full'>
                        <Plus size={13} />
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between border-b border-black/10'>
                <div className='flex flex-col pb-5'>
                    <h1 className='text-sm font-semibold'>Infants</h1>
                    <h1 className='text-[11px] text-black/50'>Under 2</h1>
                </div>
                <div className='flex flex-row gap-2'>
                    <div onClick={remInfant} className='w-6 h-6 items-center flex justify-center p-1 bg-black/5 rounded-full'>
                        <Minus size={13} />
                    </div>
                    <div>
                        <h1>{infant}</h1>
                    </div>
                    <div onClick={addInfant} className='w-6 h-6 items-center flex justify-center p-1 bg-black/10 rounded-full'>
                        <Plus size={13} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Guests
