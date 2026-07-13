"use client"
import {useState,useEffect }  from 'react'
import {DigitComp} from "../components/digitComp"

export default function page() {
  
const [count,setCount] = useState<number>(10)


useEffect(()=>{
 const id = setInterval(()=>{
setCount((digit)=>(digit > 0 ? digit - 1 : count))

 },1000)

 return ()=> clearInterval(id)
},[])
     

const digitsArray = String(count).padStart(2, '0').split('')


  return (
    <div className="flex items-center justify-center bg-neutral-200 h-screen w-screen">

     <div className="flex items-center  gap-6" >
     {digitsArray.map((d, idx) => {

      
      return ( 
      <div  key={idx} >
      <DigitComp value={parseInt(d)}  />
      </div>
     )
      
})}

     </div>

    </div>
  )
}
