import React from 'react'

export const Ipad = () => {
  return (
    <div className="max-w-2xl w-full h-full bg-neutral-50 flex items-center mx-auto">
        <div className="w-60 mx-auto ">
            <div className="w-65 h-50 rounded-4xl  bg-neutral-200 p-2 relative">
                <div className="w-full h-full rounded-[26px] bg-neutral-50">

                </div>
              <div className="absolute top-10 right-0 translate-x-1 w-1 h-8 bg-neutral-400 rounded-tr-md rounded-br-md"></div>
              <div className="absolute top-20 right-0 translate-x-1 w-1 h-8 bg-neutral-400 rounded-tr-md rounded-br-md"></div>
              <div className="absolute top-0 right-20 -translate-y-1 w-8 h-1  bg-neutral-400 rounded-tl-md rounded-tr-md"></div>
              
            </div>

        </div>


    </div>
  )
}
