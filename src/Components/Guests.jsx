import { Minus, Plus } from 'lucide-react'
import React from 'react'
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
  return (
    <div className='pl-[50%] -mt-2 h-screen w-screen load'>
      <div className='w-[54%] shadow-lg shadow-black/20 rounded-3xl h-60'>
        <div className='p-7 flex flex-col gap-5'>
            <div className='flex flex-row justify-between border-b border-black/10'>
                <div className='flex flex-col pb-5'>
                    <h1 className='text-sm font-semibold'>Adults</h1>
                    <h1 className='text-[11px] text-black/50'>Age 13 years or above</h1>
                </div>
                <div className='flex flex-row gap-2'>
                    <div className='w-6 h-6 items-center flex justify-center p-1 bg-black/5 rounded-full'>
                        <Minus size={13} />
                    </div>
                    <div>
                        <h1>0</h1>
                    </div>
                    <div className='w-6 h-6 items-center flex justify-center p-1 bg-black/10 rounded-full'>
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
                    <div className='w-6 h-6 items-center flex justify-center p-1 bg-black/5 rounded-full'>
                        <Minus size={13} />
                    </div>
                    <div>
                        <h1>0</h1>
                    </div>
                    <div className='w-6 h-6 items-center flex justify-center p-1 bg-black/10 rounded-full'>
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
                    <div className='w-6 h-6 items-center flex justify-center p-1 bg-black/5 rounded-full'>
                        <Minus size={13} />
                    </div>
                    <div>
                        <h1>0</h1>
                    </div>
                    <div className='w-6 h-6 items-center flex justify-center p-1 bg-black/10 rounded-full'>
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
