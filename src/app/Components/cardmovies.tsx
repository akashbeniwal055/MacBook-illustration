"use client"
import { IconStarFilled ,IconCircleFilled,IconCheckFilled, IconClockHour3Filled, IconBookmarkFilled, IconArrowMoveRightFilled} from '@tabler/icons-react';

import { useState, type ReactNode } from "react"

const actionIcons = [
  { key: "check", Icon: IconCheckFilled },
  { key: "clock", Icon: IconClockHour3Filled },
  { key: "bookmark", Icon: IconBookmarkFilled },
] as const

export default function cardmovies() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <div className="h-120 w-80 bg-neutral-50 rounded-3xl shadow-lg border border-neutral-300/10 ">
        <div className=" bg-white relative h-1/2 w-full rounded-4xl rounded-bl-none rounded-br-none overflow-hidden">
        <img className="h-full w-full object-cover shrink-0" src="https://imgs.search.brave.com/5HaxM18K1nXT4vBklfASNfNXDFMmG-TAgKAtP9wrYEc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M3LzI4/LzRiL2M3Mjg0YmNl/YjYwYThlM2E2ZGM1/YzM5ODVhMzQ3NWM0/LmpwZw"
         alt="dune"
         />     
        <div className=" absolute top-7 right-5 h-6 w-12 border border-neutral-200/20 px-2 bg-white rounded-xl flex items-center  gap-1 shadow-xs">
        <IconStarFilled size={10} className="text-amber-300 text-2xl" />
          <p className="text-xs font-bold text-black">8.8</p>
        </div>

        <div className=" absolute bottom-5 left-5 h-6 border border-neutral-200/20 w-30 px-2 bg-white rounded-xl flex items-center  gap-1 shadow-xs">
        <IconCircleFilled size={10} className="text-blue-600 text-2xl" />
          <p className="text-xs font-bold text-black">Plan to Watch</p>
        </div>
        </div>

        <div className=" bg-white relative h-1/2 w-full rounded-4xl rounded-t-none overflow-hidden px-6 pb-4 ">
        <div className="mt-4 w-full flex items-center gap-2 ">
          <Badge >SCI-FI</Badge>
          <Badge >ADVENTURE</Badge>
          <Badge >ACTION</Badge>
        </div>

        <div className="mt-4 w-full flex flex-col  items-baseline-last gap-2  ">

        <div className=" w-full flex items-baseline-last gap-2 ">
          <Title >Dune:Part Two</Title>
          <ReleaseYear>2024</ReleaseYear>
          </div>
          <Description>Paul Aterieds with chani and the fremen while on a warpath of revenge against the ...</Description>

        </div>

<div className="footer  mt-4 w-full flex-1 flex items-center  justify-between ">
  <div className="flex items-center gap-2 ">
    {actionIcons.map(({ key, Icon }, idx) => (
      <button
        key={key}
        type="button"
        aria-pressed={activeIdx === idx}
        onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
        className={`size-10 rounded-full flex items-center justify-center transition-all duration-200 ${
          activeIdx === idx
            ? "bg-black text-white scale-105"
            : "bg-neutral-300/20 text-neutral-400"
        }`}
      >
        <Icon size={18} />
      </button>
    ))}
  </div>

<button className="flex items-center text-xs font-semibold text-neutral-400" > Details <IconArrowMoveRightFilled /></button>

</div>
      </div>

         
        </div>
    )
}


const Badge = ({children}:{children:ReactNode})=>{
return (
  <div className=" h-5 bg-neutral-300/20 rounded-xl px-2 text-center flex items-center justify-center">
   <p className="text-xs font-semibold text-neutral-500">{children}</p>
    
    </div>
)
}


const Title = ({children}:{children:ReactNode})=>{
  return (
    
     <h2 className="text-[1.6rem] font-bold text-black">{children}</h2>
  )
  }


const ReleaseYear = ({children}:{children:ReactNode})=>{
  return (
    
     <h2 className="text-xl font-bold text-neutral-400/40">{children}</h2>
  )
  }


const Description = ({children}:{children:ReactNode})=>{
  return (
    <div className=" h-15 px-2 py-2  bg-neutral-300/20 rounded-2xl  text-center flex items-center justify-center">
     <p className="text-xs font-semibold text-neutral-500">{children}</p>
      
      </div>
  )
  }
  

