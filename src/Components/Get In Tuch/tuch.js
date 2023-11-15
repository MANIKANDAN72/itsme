import React from 'react'


export const Tuch = () => {
  return (
    <div id="contact" className='bg-black text-white'>
       <h1 className='font-bold text-5xl p-2 absolute opacity-5 '>Contact</h1>
       <h1 className='flex flex-col font-bold p-3 text-3xl relative  ml-2 '>Get in <span className='text-3xl font-bold'>Tuch</span></h1>
    <div className='flex flex-col justify-center items-center'>
    <p className='text-center p-3'>I thrive on creating responsive, user-friendly websites that solve real-world problems and am eager to contribute my skills to dynamic and innovative projects.</p>
    <div className='bg-zinc-950  flex flex-col gap-2 p-3 rounded justify-center items-center mx-auto '>
            
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 ">
             <input type="text" placeholder='Your Name' className='bg-black text-zinc-400 border w-[275px]  border-zinc-700 p-[8px] text-sm' />
             <input type="text" placeholder='Your Email' className='bg-black text-zinc-400 border w-[275px] border-zinc-700 p-[8px] text-sm' />
            </div>
            <input type="text" placeholder='Subject' className='bg-black text-zinc-400 border w-[275px] md:w-[555px] border-zinc-700 p-[8px] text-sm' />
            <textarea type="text" placeholder='Message' className='bg-black text-zinc-400 border border-zinc-700 p-[8px] text-sm h-[175px] w-[275px] md:w-[555px]' />
            <div className='flex justify-center items-center mt-5 p-2'>
            <button className="p-2 border bg-opacity rounded-md hover:bg-yellow-400">Send Message</button>
            </div>
    </div>
            
    </div>
        

        

        
    </div>

    
  )
}

export default Tuch;