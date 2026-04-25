
import {
  Navigation,
  Mountain,
  TreePalm,
  Building2,
  Waves,
  Landmark,
  Trees,
  Tent,
  Sunrise,
  Sunset,
  MapPin,
  Hotel,
  Camera,
  Utensils,
  Train,
  Bus,
  Plane,
  Castle,
  Snowflake,
  Compass
} from "lucide-react";
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
const Destination = () => {
  const data = [
    {
      title: "Nearby",
      description: "Find what's around you",
      logo: Navigation,
      bgColor: "bg-blue-300/10",
      logoColor: "#4485be"
    },
    {
      title: "Lonavala, Maharashtra",
      description: "For sights like Karla Caves",
      logo: Mountain,
      bgColor: "bg-red-300/20",
      logoColor: "#fc456c"
    },
    {
      title: "North Goa, Goa",
      description: "Popular beach destination",
      logo: TreePalm,
      bgColor: "bg-[#c69c6d]/20",
      logoColor: "#c69c6d"
    },
    {
      title: "Mumbai, Maharashtra",
      description: "City of dreams",
      logo: Building2,
      bgColor: "bg-gray-300/20",
      logoColor: "#6b7280"
    },
    {
      title: "Alibaug, Maharashtra",
      description: "Relaxing coastal escape",
      logo: Waves,
      bgColor: "bg-cyan-300/20",
      logoColor: "#06b6d4"
    },
    {
      title: "Delhi",
      description: "Historic capital city",
      logo: Landmark,
      bgColor: "bg-orange-300/20",
      logoColor: "#f97316"
    },
    {
      title: "Coorg, Karnataka",
      description: "Coffee plantations & hills",
      logo: Trees,
      bgColor: "bg-green-300/20",
      logoColor: "#22c55e"
    },
    {
      title: "Rishikesh, Uttarakhand",
      description: "Yoga capital of the world",
      logo: Tent,
      bgColor: "bg-teal-300/20",
      logoColor: "#14b8a6"
    },
    {
      title: "Kanyakumari, Tamil Nadu",
      description: "Southernmost tip of India",
      logo: Sunrise,
      bgColor: "bg-yellow-300/20",
      logoColor: "#eab308"
    },
    {
      title: "Jaisalmer, Rajasthan",
      description: "Golden desert city",
      logo: Sunset,
      bgColor: "bg-amber-300/20",
      logoColor: "#f59e0b"
    },
    {
      title: "Pune, Maharashtra",
      description: "Cultural capital of Maharashtra",
      logo: MapPin,
      bgColor: "bg-purple-300/20",
      logoColor: "#8b5cf6"
    },
    {
      title: "Udaipur, Rajasthan",
      description: "City of lakes",
      logo: Camera,
      bgColor: "bg-pink-300/20",
      logoColor: "#ec4899"
    },
    {
      title: "Manali, Himachal Pradesh",
      description: "Snowy mountain retreat",
      logo: Snowflake,
      bgColor: "bg-blue-200/20",
      logoColor: "#3b82f6"
    },
    {
      title: "Shimla, Himachal Pradesh",
      description: "Colonial hill station",
      logo: Castle,
      bgColor: "bg-indigo-300/20",
      logoColor: "#6366f1"
    },
    {
      title: "Jaipur, Rajasthan",
      description: "The pink city",
      logo: Landmark,
      bgColor: "bg-rose-300/20",
      logoColor: "#f43f5e"
    },
    {
      title: "Kerala Backwaters",
      description: "Serene houseboat rides",
      logo: Waves,
      bgColor: "bg-emerald-300/20",
      logoColor: "#10b981"
    },
    {
      title: "Varanasi, Uttar Pradesh",
      description: "Spiritual riverside city",
      logo: Compass,
      bgColor: "bg-yellow-200/20",
      logoColor: "#ca8a04"
    },
    {
      title: "Hyderabad, Telangana",
      description: "City of pearls & biryani",
      logo: Utensils,
      bgColor: "bg-red-200/20",
      logoColor: "#ef4444"
    },
    {
      title: "Bangalore, Karnataka",
      description: "Tech hub of India",
      logo: Building2,
      bgColor: "bg-sky-300/20",
      logoColor: "#0ea5e9"
    },
    {
      title: "Chennai, Tamil Nadu",
      description: "Coastal cultural city",
      logo: Train,
      bgColor: "bg-orange-200/20",
      logoColor: "#fb923c"
    }
  ];
  useGSAP(() => (
    gsap.from(".load", {
      x: 100,
      duration: 0.4
    })
  ))
  return (
    <div className='mt-4 load flex absolute w-full z-50 justify-center pointer-events-none'>
      <div className='w-[55%] flex justify-start pointer-events-auto'>
        <div className=' shadow-md shadow-black/20 border-b border-white/40 w-[400px] h-100 rounded-4xl overflow-y-auto bg-white'>
        <div className='pl-10 pt-6'>
          <h1 className='text-[10px] text-gray-700'>Suggested destinations</h1>
        </div>
        <div className='pl-10 pt-2 flex flex-col gap-3'>
          {data.map((item, idx) => (
            <div key={idx} className='flex gap-2'>
              <div className={`${item.bgColor} w-fit rounded-lg`}>
                <div className='p-3'>
                  <item.logo className='' size={18} color={item.logoColor} strokeWidth={1.5} />
                </div>
              </div>
              <div className='flex flex-col justify-center'>
                <h1 className=' text-xs'>{item.title}</h1>
                <h1 className='text-[11px] text-olive-500'>{item.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Destination
