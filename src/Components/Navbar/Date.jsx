import React, { useState } from 'react'
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
const Date = () => { 
    useGSAP(()=>(
        gsap.from(".load",{
            duration:0.4,
            x:-100,
        })
    ))
    const [selected, setSelected] = useState(undefined);
    const [TodayActive, setTodayActive] = React.useState(false);
    const [TommorrowActive, setTommorrowActive] = React.useState(false);
    const [WeekendActive, setWeekendActive] = React.useState(false);
    const isTodayActive = () => {
        setTodayActive(true)
        setTommorrowActive(false)
        setWeekendActive(false)
    }
    const isTommorrowActive = () =>{
        setTodayActive(false)
        setTommorrowActive(true)
        setWeekendActive(false)
    }
    const isWeekendActive = () =>{
        setTodayActive(false)
        setTommorrowActive(false)
        setWeekendActive(true)
    }
  return (
    <div className='mt-4 absolute w-full z-50 flex justify-center pointer-events-none'>
      <div className='w-[55%] flex justify-center pointer-events-auto'>
        <div className='w-fit pr-10 h-80 rounded-3xl shadow-lg shadow-black/15 flex flex-row gap-10 load bg-white'>
            <div>
                <div className='p-5 flex flex-col gap-5'>
                    <div onClick={isTodayActive} className={`border rounded-xl pl-4 p-5 ${TodayActive ? "border-2 border-black bg-black/2" : "border-black/20"}`}>
                        <h1 className='text-[13px] font-semibold'>Today</h1>
                        <h1 className='text-[11px] text-gray-700'>18 Apr</h1>
                    </div>
                    <div onClick={isTommorrowActive} className={`border rounded-xl pl-4 p-5 ${TommorrowActive? "border-2 border-black bg-black/2" : "border-black/20"}`}>
                        <h1 className='text-[13px] font-semibold'>Tommorrow</h1>
                        <h1 className='text-[11px] text-gray-700'>19 Apr</h1>
                    </div>
                    <div onClick={isWeekendActive} className={`border rounded-xl pl-4 p-5 ${WeekendActive ? "border-2 border-black bg-black/2" : "border-black/20"}`}>
                        <h1 className='text-[13px] font-semibold'>This weekend</h1>
                        <h1 className='text-[11px] text-gray-700'>18-19 Apr</h1>
                    </div>
                </div>
            </div>
            <div style={{transform:"scale(0.85)"}} className='-mt-4'>
                <DayPicker
                style={{"--rdp-accent-color":"black"}}
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Date
