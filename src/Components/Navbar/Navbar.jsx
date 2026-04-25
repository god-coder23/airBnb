import React, { use, useRef, useState, useEffect } from 'react'
import { Earth, Menu, Search } from 'lucide-react'
import Destination from './Destination';
import Date from './Date';
import Guests from './Guests';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
  const navRef = useRef()
  const [isScrolled, setIsScrolled] = React.useState(false);
  useGSAP(()=>{
    const st = ScrollTrigger.create({
      trigger:navRef.current,
      start:"top+=100 top",
      end:"+=200",
      onEnter:()=>{setIsScrolled(true)},
      onLeaveBack:()=>setIsScrolled(false),
      pin:true,
      pinSpacing:false,
    })
    
  })
  useGSAP(() => {
  if (isScrolled) {
    gsap.fromTo(".smallnav",
      { opacity: 0, y: -30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.3, ease: "power2.out" }
    );
  }
}, [isScrolled]);

  const searchContainerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setActiveDest(false);
        setActiveDate(false);
        setActiveGuest(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [activeHome, setActiveHome] = useState(true)
  const [activeExp, setActiveExp] = React.useState(false);
  const [activeServices, setactiveServices] = React.useState(false);
  const [activeDest, setActiveDest] = React.useState(false);
  const [activeDate, setActiveDate] = React.useState(false);
  const [activeGuest, setActiveGuest] = React.useState(false);
  const isActiveHome = () => {
    setActiveHome(true)
    setactiveServices(false)
    setActiveExp(false)
    setActiveDest(false)
    setActiveGuest(false)
  }
  const isActiveExp = () =>{
    setActiveExp(true)
    setActiveHome(false)
    setactiveServices(false)
    setActiveDest(false)
    setActiveGuest(false)
  }
  const isactiveService = () =>{
    setactiveServices(true)
    setActiveHome(false)
    setActiveExp(false) 
    setActiveDest(false)
    setActiveGuest(false)
  }
  const isActiveDest = () =>{
    setActiveDest(true)
    setActiveDate(false)
    setActiveGuest(false)
  }
  const isActiveDate = () =>{
    setActiveDate(true)
    setActiveDest(false)
    setActiveGuest(false)
  }
  const isActiveGuest = () =>{
    setActiveDate(false)
    setActiveDest(false)
    setActiveGuest(true)
  }
  return (
    <div ref={navRef} className='w-screen flex flex-col flex lg:flex-col lg:gap-5 relative z-50 bg-white'>
          <div className='justify-between flex flex-col lg:flex-row p-12 lg:pt-2 items-center'>
            <div className='flex flex-row gap-1'>
              <div className='h-7 w-7 flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="airbnb">
                <path fill="#fe5b5f" d="m18.042 23.975c-.207 0-.416-.013-.625-.039-.001 0-.002 0-.002 0-.083 0-.166-.014-.244-.041-.529-.064-1.53-.206-2.949-1.227-.967-.687-1.711-1.468-2.222-2.04-.511.571-1.256 1.353-2.226 2.043-1.452 1.044-2.468 1.167-2.901 1.219l-.002-.009c-.099.042-.204.066-.314.058-1.387.167-2.724-.243-3.773-1.154-1.12-.971-1.763-2.395-1.763-3.906 0-1.282 0-1.988 6.43-14.806l.151-.313c.891-1.848 1.814-3.76 4.388-3.76 2.594 0 3.517 1.912 4.409 3.761l.154.318c6.427 12.813 6.427 13.52 6.427 14.801 0 1.511-.643 2.935-1.763 3.906-.898.778-2.005 1.189-3.175 1.189zm-.489-1.534c.989.134 1.939-.146 2.682-.789.791-.686 1.245-1.696 1.245-2.772 0-.948 0-1.633-6.271-14.133-.001-.003-.002-.005-.004-.008l-.158-.326c-.922-1.914-1.477-2.913-3.037-2.913-1.58 0-2.134.999-3.058 2.912l-.158.326c-6.274 12.509-6.274 13.194-6.274 14.142 0 1.076.454 2.086 1.245 2.772.743.644 1.697.922 2.682.789.086-.021.17-.031.247-.041.319-.039 1.066-.128 2.208-.95.923-.656 1.638-1.435 2.104-1.963-1.994-2.575-3.006-4.788-3.006-6.577 0-2.738 2.012-4.17 4-4.17s4 1.432 4 4.17c0 1.789-1.011 4.002-3.006 6.578.466.529 1.181 1.307 2.101 1.961 1.146.824 1.892.914 2.211.952.077.009.161.019.247.04zm-5.553-12.201c-1.244 0-2.5.826-2.5 2.67 0 1.375.863 3.241 2.5 5.408 1.637-2.167 2.5-4.033 2.5-5.408 0-1.844-1.256-2.67-2.5-2.67z"></path>
              </svg>
            </div>
            <h1 className='text-[#f42a4f] font-medium mr-[10%] text-lg'>airbnb</h1>
            </div>
            <div className='flex flex-row gap-3 items-center justify-center'>
                <div onClick={isActiveHome} className={`flex flex-row items-center hover:cursor-pointer justify-center ${activeHome  ? "border-b-2 rounded-xs border-black" : "border-none"} `}>
                  <div>
                    <video className='h-15 w-15 hover:scale-115 duration-300' src="https://a0.muscache.com/videos/search-bar-icons/hevc/house-twirl-selected.mov" autoPlay muted playsInline></video>
                  </div>
                  <h1 className='text-xs'>Homes</h1>
                </div>
                <div onClick={isActiveExp} className={`flex flex-row items-center justify-center hover:cursor-pointer ${activeExp ? "border-b-2 rounded-xs border-black" : "border-none"} `}>
                  <div>
                    <video className='h-15 w-15 hover:scale-115 duration-300' src="https://a0.muscache.com/videos/search-bar-icons/hevc/balloon-twirl.mov" autoPlay muted playsInline></video>
                  </div>
                  <h1 className='text-xs'>Experiences</h1>
                </div>
                  <div onClick={isactiveService} className={`flex flex-row items-center justify-center hover:cursor-pointer ${activeServices ? "border-b-2 rounded-xs border-black" : "border-none"} `}>
                    <div>
                      <video className='h-15 w-15 hover:scale-115 duration-300' src="https://a0.muscache.com/videos/search-bar-icons/hevc/consierge-twirl.mov" autoPlay muted playsInline></video>
                    </div>
                    <h1 className='text-xs'>Services</h1>
                  </div>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <h1 className='text-xs'>Become a host</h1>
                <div className='bg-black/10 rounded-full p-2'>
                  <Earth size={13} strokeWidth={2} />
                </div>
                <div className='bg-black/10 rounded-full p-2'>
                  <Menu size={13} strokeWidth={2} />
                </div>
            </div>
        </div>
        <div ref={searchContainerRef}>
          <div className='navbar'>
           {!isScrolled && (
             <div className='flex justify-center items-center'>
              <div className='w-[55%] backdrop:blur-2xl h-14 pt-1 pb-1 flex justify-start content-center items-center -mt-14  border border-black/10 shadow-lg shadow-black/10 rounded-4xl'>
                <div onClick={isActiveDest} className={`flex flex-col pr-6 pl-6 pt-7 pb-7 hover:bg-black/5 h-full flex-1 justify-center rounded-4xl hover:w-100 hover:border-none border-black/20 ${activeDest ? "bg-white shadow-md border-transparent" : ""}`}>
                  <h1 className='text-[10px]'>Where</h1>
                  <input className='text-[10px] text-gray-600 font-light outline-none bg-transparent' placeholder='Search Destinations' />
                </div>
                <div onClick={isActiveDate} className={`flex flex-col pr-6 pl-6 pt-7 pb-7 hover:bg-black/5 h-full flex-1 justify-center rounded-4xl hover:w-100 hover:border-none w-1/3  border-black/20 ${activeDate ? "bg-white shadow-md border-transparent" : ""}`}>
                  <h1 className='text-[10px]'>When</h1>
                  <h1 className='text-[10px] text-gray-600 font-light'>Add Dates</h1>
                </div>
                <div onClick={isActiveGuest} className={`flex flex-row items-center flex-1 h-full rounded-4xl hover:bg-black/5 pl-6 pr-2 pt-7 pb-7 ${activeGuest ? "bg-white shadow-md border-transparent" : ""}`}>
                    <div className='flex flex-col flex-1 justify-center'>
                      <h1 className='text-[10px]'>Who</h1>
                      <h1 className='text-[10px] text-gray-600 font-light'>Add guests</h1>
                    </div>
                    <div className="pr-2">
                      <div className="p-3 bg-red-500 rounded-full flex items-center justify-center">
                        <Search size={16} color="white" />
                      </div>
                    </div>
                  </div>
              </div>
            </div>
           )}
           {isScrolled && (
            <div className='smallnav'>
              <div className='flex justify-center items-center mt-10 '>
                <div className='w-[30%] h-14 pt-1 pb-1 flex justify-start content-center items-center -mt-14  border border-black/10 shadow-lg shadow-black/10 rounded-4xl'>
                  <div onClick={isActiveDest} className={`flex flex-col pr-6 pl-6 pt-7 pb-7 hover:bg-black/5 h-full flex-1 justify-center rounded-4xl hover:w-100 hover:border-none border-black/20 ${activeDest ? "bg-white shadow-md border-transparent" : ""}`}>
                    <h1 className='text-[10px]'>Where</h1>
                    <input className='text-[10px] text-gray-600 font-light outline-none bg-transparent' placeholder='Search Destinations' />
                  </div>
                  <div onClick={isActiveDate} className={`flex flex-col pr-6 pl-6 pt-7 pb-7 hover:bg-black/5 h-full flex-1 justify-center rounded-4xl hover:w-100 hover:border-none w-1/3  border-black/20 ${activeDate ? "bg-white shadow-md border-transparent" : ""}`}>
                    <h1 className='text-[10px]'>When</h1>
                    <h1 className='text-[10px] text-gray-600 font-light'>Add Dates</h1>
                  </div>
                  <div onClick={isActiveGuest} className={`flex flex-row items-center flex-1 h-full rounded-4xl hover:bg-black/5 pl-6 pr-2 pt-7 pb-7 ${activeGuest ? "bg-white shadow-md border-transparent" : ""}`}>
                      <div className='flex flex-col flex-1 justify-center'>
                        <h1 className='text-[10px]'>Who</h1>
                        <h1 className='text-[10px] text-gray-600 font-light'>Add guests</h1>
                      </div>
                      <div className="pr-2">
                        <div className="p-3 bg-red-500 rounded-full flex items-center justify-center">
                          <Search size={16} color="white" />
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
           )}
          </div>
          {activeDest && <Destination />}
          {activeDate && <Date />}
          {activeGuest && <Guests />}
        </div>
    </div>
  )
}

export default Navbar
