import React from 'react'

export const Iphone = () => {
    return (
        <div className=" max-w-2xl w-full h-96 flex items-center  bg-neutral-50 mx-auto ">
            <div className="w-60 mx-auto  ">
                {/* iphone body */}
                <div className="relative w-24 h-42 rounded-3xl bg-neutral-200 mx-auto p-1">
                    {/* iphone display */}
                    <div className="w-full h-full  bg-white rounded-[20px] p-1 relative ">
                        {/* dynamic iland */}
                        <div className="mx-auto w-8 h-2 bg-black rounded-3xl "></div>
                        <div className="absolute bottom-0 left-1/2 -translate-1/2 w-8 h-[3px] bg-neutral-400 mx-auto rounded-3xl"></div>
                    </div>
                    {/* power button */}
                    <div className="absolute top-1/3 right-0 translate-x-[2px] w-[2px] h-6 bg-neutral-300 rounded-tr-lg rounded-br-lg" ></div>
                    {/* volume up */}
                    <div className="absolute top-[50px] left-0 -translate-x-[2px] w-[2px] h-4 bg-neutral-300 rounded-tl-lg rounded-bl-lg" ></div>
                    {/* volume down */}
                    <div className="absolute top-18  left-0 -translate-x-[2px] w-[2px] h-4 bg-neutral-300 rounded-tl-lg rounded-bl-lg" ></div>
{/* silent button  */}
                   <div className="absolute top-9 left-0 -translate-x-[2px]  w-[2px] h-2 bg-neutral-300 rounded-tl-lg rounded-bl-lg" ></div>
                   
                </div>
            </div>
        </div>
    )
}
