import React from 'react'
import myImage from '/images/grad-pic.png'

const AboutMe = () => {
  return (
   <div className=" text-slate-100 bg-red-700">
         <div className="lg:h-screen flex flex-wrap  justify-center items-center">
            <h2 className='font-bold text-3xl mt-3'>About Me</h2>
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full lg:w-1/2 flex justify-center items-center">
             <img className="relative w-[350px]" src={myImage} alt="" />
           </div>
             <div className="w-full lg:w-1/2">
             <div className="flex flex-col lg:items-start">
               <h2 className="font-thin text-6xl">Ben Ryan Rinconada</h2>
               <h2 className="mt-4 font-bold pl-1 text-2xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent
               ">Full Stack Developer</h2>
               <p className="pt-3 pl-1">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
               </p>
             </div>
           </div>
           
          </div>
         </div>
       </div>
  )
}

export default AboutMe