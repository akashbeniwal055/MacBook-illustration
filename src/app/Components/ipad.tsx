"use client";

import React from "react";
import { motion } from 'framer-motion'

export const Ipad = () => {
  return (
    <motion.div whileHover="animate" initial="initial" 

    className="max-w-2xl w-full h-full bg-neutral-50 flex items-center mx-auto">
      <div className="w-60 mx-auto ">
        <div className="w-65 h-50 rounded-4xl  bg-neutral-200 p-2 relative">
          <div className="w-full h-full rounded-[26px] bg-neutral-50 overflow-hidden">
            <motion.img 
            variants={{
              animate:{
                opacity:1,
                filter:"blur(0px)"

              },
              initial:{
                opacity:0,
                filter:"blur(20px)"
              }
            }}
            transition={{
              ease: [0.42, 0, 0.58, 1],
              duration:0.5,
              delay:0.3
            }}
             className="w-full h-full object-cover scale-127" src="https://imgs.search.brave.com/kHTCCsjIayVGZXGe2B1-TxVMQZFGNjTFWdc6GtUODDI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/NTUzMTM4My9maWxl/L29yaWdpbmFsLTAy/ZmVhZWU3YjQ1MjA3/ZDUwYTg2NTI2MDgy/Y2FjNDM2LnBuZz9m/b3JtYXQ9d2VicCZy/ZXNpemU9NDAweDMw/MCZ2ZXJ0aWNhbD1j/ZW50ZXI" />
          </div>
          <div className="absolute top-10 right-0 translate-x-1 w-1 h-8 bg-neutral-400 rounded-tr-md rounded-br-md"></div>
          <div className="absolute top-20 right-0 translate-x-1 w-1 h-8 bg-neutral-400 rounded-tr-md rounded-br-md"></div>
          <div className="absolute top-0 right-20 -translate-y-1 w-8 h-1  bg-neutral-400 rounded-tl-md rounded-tr-md"></div>

        </div>

      </div>


    </motion.div>
  )
}
