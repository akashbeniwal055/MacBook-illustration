"use client";
import React from "react";

import { motion } from "framer-motion";
export default function Macbook() {
  return (
    <motion.div
      whileHover="animate"
      initial="initial"
      className=" w-full mx-auto flex items-center h-full bg-neutral-50"
    >

      <div


        className="w-60 mx-auto perspective-distant"
      >
        {/* lid */}
        <motion.div
          variants={{
            animate: {
              rotateX: "20deg",
            },
            initial: {
              rotateX: "-50deg",
            },
          }}
          transition={{
            ease: [0.42, 0, 0.58, 1],
            duration: 0.8,
          }}
          style={{
            transformOrigin: "bottom",
          }}
          className="w-[90%] h-30 p-1 mx-auto bg-black rounded-tl-lg rounded-tr-lg shadow-sm shadow-black/10 ring-1 ring-black/10"
        >
          <div className="w-full h-full rounded-tl-[4px] rounded-tr-[4px] bg-neutral-900 overflow-hidden">
            <div className="w-5 h-2 absolute top-0 inset-0 mx-auto bg-black rounded-br-xs rounded-bl-xs z-10"></div>
            <motion.img
              variants={{
                animate: {
                  opacity: 1,
                  filter: "blur(0px)",
                },
                initial: {
                  opacity: 0,
                  filter: "blur(30px)",
                },
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="h-full w-full object-cover"
              src="https://imgs.search.brave.com/MeDjYYbuOpQ76VN0_L7YXvNLV1si7S-SnchAkhkeFyE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93ZWJh/c3NldHMubGluZWFy/LmFwcC9pbWFnZXMv/b3JuajczMHAvcHJv/ZHVjdGlvbi9iNzU1/MWFlNDRkMDM2NWMw/ZWQ4N2Q3ZTVlMjNh/ZWIwNDIxMjMzYmE1/LTIzNTJ4MTY1Ni5w/bmc_cT05NSZhdXRv/PWZvcm1hdCZkcHI9/Mg"
              alt="Macbook screen"
            />
          </div>
        </motion.div>

        {/* back */}
        <div className=" relative w-full mx-auto h-4 rounded-bl-2xl rounded-br-2xl rounded-tl-sm rounded-tr-sm  bg-linear-to-t from-neutral-300 to-neutral-100 shadow-[0px_1px_0px_0px_var(--color-neutral-300)_inset] ">
          <div className="absolute top-0 w-10 h-2 inset-0 mx-auto bg-neutral-300 rounded-bl-md rounded-br-md shadow-[0px_-1px_0px_0px_var(--color-neutral-100)_inset,1px_0px_5px_0px_var(--color-neutral-500)_inset] "></div>
        </div>

      </div>


    </motion.div>
  )
}
