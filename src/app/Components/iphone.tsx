'use client'
import React from 'react'
import { motion } from 'framer-motion'

export const Iphone = () => {
    return (
        <motion.div
            whileHover="animate"
            initial="initial"
            className=" max-w-2xl w-full h-full flex items-center  bg-neutral-50 mx-auto ">
            <div className="w-60 mx-auto perspective-distant">
                {/* iphone body */}
                <motion.div
                    variants={{
                        animate: {
                            rotateX: "0deg",
                            y: -14,
                        },
                        initial: {
                            // "resting on table" pose (tilted away, slightly lower)
                            rotateX: "70deg",
                            y: 14,
                        }
                    }}
                    transition={{
                        ease: [0.42, 0, 0.58, 1],
                        duration: 0.8,
                    }}
                    style={{
                        transformOrigin: "bottom center",
                    }}
                    className="relative w-24 h-42 rounded-3xl bg-neutral-200 mx-auto p-1 ">
                    

                    {/* iphone display */}
                    <div className="w-full h-full  bg-white rounded-[20px] p-1 relative overflow-hidden  ">

                        {/* dynamic iland */}
                        <motion.div
                            variants={{
                                initial: {
                                    opacity: 0

                                },
                                animate: {
                                    opacity: 1

                                }
                            }}

                            transition={{
                                ease: [0.42, 0, 0.58, 1],
                                duration: 0.8,
                            }}
                            className="mx-auto w-8 h-2 bg-black rounded-3xl z-50 "></motion.div>
                        {/* navigation bar  */}
                        <div className="absolute bottom-0 left-1/2 -translate-1/2 w-8 h-[3px] bg-neutral-400 mx-auto rounded-3xl z-50"></div>
                        <motion.img variants={{

                            initial: {
                                opacity: 0,
                                filter: "blur(10px)"
                            }, animate: {
                                opacity: 1,
                                filter: "blur(0px)"
                            }
                        }}
                            transition={{
                                duration: 0.3,
                                delay: 0.3,
                            }}

                            className="w-full h-full  object-cover z-10"
                            src="https://cdn.dribbble.com/userupload/47414392/file/9fca4b37f60018cb56815fe58551cefc.png?resize=2048x1536&vertical=center" />
                    </div>

                    {/* power button */}
                    <div className="absolute top-1/3 right-0 translate-x-[2px] w-[2px] h-6 bg-neutral-300 rounded-tr-lg rounded-br-lg" ></div>
                    {/* volume up */}
                    <div className="absolute top-[50px] left-0 -translate-x-[2px] w-[2px] h-4 bg-neutral-300 rounded-tl-lg rounded-bl-lg" ></div>
                    {/* volume down */}
                    <div className="absolute top-18  left-0 -translate-x-[2px] w-[2px] h-4 bg-neutral-300 rounded-tl-lg rounded-bl-lg" ></div>
                    {/* silent button  */}
                    <div className="absolute top-9 left-0 -translate-x-[2px]  w-[2px] h-2 bg-neutral-300 rounded-tl-lg rounded-bl-lg" ></div>

                </motion.div>
            </div>
        </motion.div>
    )
}
