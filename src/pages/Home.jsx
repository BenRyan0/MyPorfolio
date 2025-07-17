import React from 'react'
import NavBar from './../components/NavBar';
import Hero from './../components/Hero';
import AboutMe from './AboutMe';
import Technologies from './Technologies';
import Experience from './Experience';
import Projects from './Projects';
import MyResume from './MyResume';

const Home = () => {
  return (
     <div className="flex min-h-svh flex-col items-center justify-center bg-[#020617] relative ">
       <div className="container mx-auto px-8 mt-20 lg:mt-0 pb-6">
         <NavBar/>
         <Hero/>
         <AboutMe/>
         <Technologies/>
         <Experience/>
         <Projects/>
         <MyResume/>
       </div>
    
    </div>

    
  )
}

export default Home

