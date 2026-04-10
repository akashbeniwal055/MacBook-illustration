import React from 'react'

export default function Macbook() {
  return (
    <div className="max-w-2xl w-full mx-auto flex items-center  h-96 bg-neutral-50 perspective-distant">

<div className="w-60  mx-auto ">
  {/* lid */}
    <div 
    style={{transform:'rotateX(30deg)',
           transformOrigin:'bottom'
    }}
    className="w-[90%] h-30 p-1 mx-auto bg-neutral-900 rounded-tl-lg rounded-tr-lg shadow-sm shadow-black/10 ring-1 ring-black/10 ">
    <div className="w-full h-full   rounded-tl-[4px] rounded-tr-[4px] bg-white overflow-hidden ">
      {/* <img className="h-full w-full oject-cover" src='https://imgs.search.brave.com/n08Q7smaUcFHLxGPNrQygZzlWAV_131XiwZ6gM42yOg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ3JvY2tldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDMvTGluZWFy/LXdlYnNpdGUtMjAy/NS5wbmc'></img>
       */}
    </div>
    </div>
 
{/* back */}
<div className=" relative w-full mx-auto h-4 rounded-bl-2xl rounded-br-2xl rounded-tl-sm rounded-tr-sm  bg-linear-to-t from-neutral-300 to-neutral-100 shadow-[0px_1px_0px_0px_var(color-neutral-300)_inset] ">
<div className="absolute top-0 w-10 h-2 inset-0 mx-auto bg-neutral-300 rounded-bl-md rounded-br-md shadow-[0px_-1px_0px_0px_var(--color-neutral-100)_inset,1px_0px_5px_0px_var(--color-neutral-500)_inset] "></div>
</div>

</div>


</div>
  )
}
