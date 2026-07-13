"use client"
import React, { useState } from 'react'
import { cn } from "../lib/utils"

export  function DigitComp({value}:any) {

   

 const digits:any = {
    0: [
      0,1,1,1,0,
      1,0,0,0,1,
      1,0,0,0,1,
      1,0,0,0,1,
      0,1,1,1,0,
    ],
    1: [
      0,0,1,0,0,
      0,1,1,0,0,
      0,0,1,0,0,
      0,0,1,0,0,
      0,1,1,1,0,
    ],
    2: [
      0,1,1,1,0,
      1,0,0,0,1,
      0,0,1,1,0,
      0,1,0,0,0,
      1,1,1,1,1,
    ],
    3: [
      0,1,1,1,0,
      1,0,0,0,1,
      0,0,1,1,0,
      1,0,0,0,1,
      0,1,1,1,0,
    ],
    4: [
      0,0,1,0,1,
      0,1,0,0,1,
      1,0,0,0,1,
      0,1,1,1,1,
      0,0,0,0,1,
    ],
    5: [
      0,1,1,1,0,
      1,0,0,0,0,
      0,1,1,1,0,
      0,0,0,0,1,
      1,1,1,1,0,
    ],
    6: [
      0,1,1,1,0,
      1,0,0,0,0,
      0,1,1,1,0,
      1,0,0,0,1,
      0,1,1,1,0,
    ],
    7: [
      1,1,1,1,1,
      0,0,0,1,0,
      0,0,1,0,0,
      0,1,0,0,0,
      1,0,0,0,0,
    ],
    8: [
      0,1,1,1,0,
      1,0,0,0,1,
      0,1,1,1,0,
      1,0,0,0,1,
      0,1,1,1,0,
    ],
    9: [
      0,1,1,1,0,
      1,0,0,0,1,
      0,1,1,1,0,
      0,0,0,0,1,
      1,1,1,1,0,
    ],
  };

  const pattern = digits[value] || digits[0];


 

    return (
<>

<GooeyFilter />
<div className="relative size-80 border-2 border-neutral-800/30  overflow-hidden  ">
   {/*border grid   */}
  <div className="absolute inset-0 grid grid-cols-5 grid-rows-5">
    {Array.from({length:25}).map(function(_,idx){
      return (  <div key={idx}  className="border border-neutral-800/50" />
         
      ) 
    })}
  </div>


{/* 320 - 60 - 88  */}



<div  className="absolute  inset-0 grid grid-cols-5 grid-rows-5 z-10 ">
    
    {pattern.map(function(active:boolean,idx:number){
      return (  <div key={idx}  className="flex items-center justify-center " >
        <div className={cn("size-15 rounded-full  ", active ?  " " : " border-2 border-neutral-800/30 ")}>
        
        </div>
        </div>  
         
      )
    })}
  </div> 




{/* dot grid */}
  <div style={{filter:"url(#goo-effect)"}} className="absolute inset-0 grid grid-cols-5 grid-rows-5 z-5 ">
    <GooeyFilter />
    {pattern.map(function(active:boolean,idx:number){
      return (  <div key={idx}  className="flex items-center justify-center " >
        <div className={cn("size-22 rounded-lg", active ? "bg-black overflow-hidden " : "bg-transparent border-2 border-neutral-800/50")}>
        
        </div>
        </div>  
         
      )
    })}
  </div>
</div>

</>

    )
}



const GooeyFilter = () => {
  return (
    <svg aria-hidden="true" className="absolute w-0 h-0">
      <defs>
        <filter id="goo-effect">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -15"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};