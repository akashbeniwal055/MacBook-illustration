
import { Iphone } from "./Components/iphone";
import Macbook from "./Components/macbook"
import { Ipad } from "./Components/ipad"

export default function () {
  return (

    <div className="h-screen w-screen bg-white flex flex-col items-center jusitify-center">

      <div className="flex flex-col gap-4 text-center mb-10 ">

        <h2 className="text-4xl font-bold text-neutral-800">Bento grid </h2>
        <p className=" text-lg font-mono text-neutral-400"> A bento grid layout featuring custom illustration-based animations. </p>
      </div>
      <Bento >

        <BentoSkeleton className={"col-span-2 rounded-2xl "}>
          <Macbook />
        </BentoSkeleton>
        <BentoSkeleton className={"col-span-1 rounded-2xl "}>
        </BentoSkeleton>


        <BentoSkeleton className={"col-span-1 rounded-2xl "}>
          <Iphone />
        </BentoSkeleton>
        <BentoSkeleton className={"col-span-2 rounded-2xl "}>
          <Ipad />
        </BentoSkeleton>




      </Bento>

    </div>






  )
}


const Bento = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
  return (
    <div className={` grid grid-cols-3 h-[90%]  w-1/2  rounded-4xl  mx-auto gap-5 ${className}`}>
      {children}
    </div>
  )
}
const BentoSkeleton = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
  return (
    <div className={` border border-neutral-200 overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

