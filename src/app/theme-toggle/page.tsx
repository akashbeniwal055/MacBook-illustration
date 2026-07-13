"use client"

import { useTheme } from "next-themes"
import { useRef, useEffect, useState } from "react"
import { motion } from "motion/react"


export default function ThemeToggle() {


  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)


  }

  const isDark = theme === "dark"

  const raysVarients = {
    hidden: {
      strokeOpacity: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      }
    },
    visible: {
      strokeOpacity: 1,
      transition: {
        staggerChildren: 0.03

      }
    }
  }




  const rayVarient = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      scale: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        pathLength: { duration: 0.3 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.3 }


      }
    },
  };





  const shineVariants = {
    hidden: {
      opacity: 0,
      scale: 2,
      strokeDashedarray: "20,1000",
      strokeDashedoffset: 0,
      filter: "blur(0px)",
    },
    visible: {
      opacity: [0, 1, 0],
      strokeDashedoffset: [0, -50, -100],
      filter: ["blur(2px)", "blur(2px)", "blur(0px)"],
      transition: {
        duration: 0.75,
        ease: "linear" as const,
      },
    },
  };

  const SunPath = "M51 66C60.3888 66 68 58.6127 68 49.5C68 40.3873 60.3888 33 51 33C41.6112 33 34 40.3873 34 49.5C34 58.6127 41.6112 66 51 66Z"
  const MoonPath = "M51 66C60.3888 66 68 58.6127 68 49.5C50.6623 56.3291 45.232 46.905 51 33C41.6112 33 34 40.3873 34 49.5C34 58.6127 41.6112 66 51 66Z"




  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 transition-colors">
      <button
        onClick={toggleTheme}
        className="relative size-14 p-2 rounded-xl  bg-white dark:bg-neutral-800 shadow-lg border border-neutral-200/30 dark:border-neutral-700/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="Toggle theme"
      >
        <motion.svg className={'relative'} width="98" height="98" viewBox="0 0 102 99" fill="none" xmlns="http://www.w3.org/2000/svg">

          <motion.path
            d={SunPath}
            fill="transparent"
            transition={{ duration: 1, type: "spring" }}
            initial={{ fillOpacity: 0, strokeOpacity: 0 }}
            animate={
              theme === "dark"
                ? {
                  d: MoonPath,
                  rotate: 0,
                  scale: 2,
                  stroke: "var(--color-blue-400)",
                  fill: "var(--color-blue-400)",
                  fillOpacity: 0.35,
                  strokeOpacity: 1,
                  transition: { delay: 0.1 },
                }
                : {
                  d: SunPath,
                  rotate: 0,
                  stroke: "var(--color-yellow-600)",
                  fill: "var(--color-yellow-600)",
                  fillOpacity: 0.35,
                  strokeOpacity: 1,
                }
            }
          />


          <motion.path

            variants={shineVariants}
            d={MoonPath}
            className={"moonPath absolute top-0 left-0 stroke-blue-100 "}
            initial="hidden"
            animate={theme === "dark" ? "visible" : "hidden"}
          />
          

          <motion.g variants={raysVarients} initial="hidden" animate={theme === "light" ? "visible" : "hidden"} className="stroke-6 stroke-yellow-500" strokeLinecap="round" >
            <motion.path variants={rayVarient} d="M51 8.25V16.5" />
            <motion.path variants={rayVarient} d="M20.9525 20.3363L26.945 26.1525" />
            <motion.path variants={rayVarient} d="M8.5 49.5H17" />
            <motion.path variants={rayVarient} d="M26.945 72.8475L20.9525 78.6637" />
            <motion.path variants={rayVarient} d="M51 82.5V90.75" />
            <motion.path variants={rayVarient} d="M75.055 72.8475L81.0475 78.6637" />
            <motion.path variants={rayVarient} d="M85 49.5H93.5" />
            <motion.path variants={rayVarient} d="M81.0475 20.3363L75.055 26.1525" />
          </motion.g>



          
        </motion.svg>


      </button>
    </div>
  )
}
