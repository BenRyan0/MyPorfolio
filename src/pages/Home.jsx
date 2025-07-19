import { useRef } from 'react';
import NavBar from './../components/NavBar';
import Hero from './../components/Hero';
import AboutMe from './AboutMe';
import Technologies from './Technologies';
import Experience from './Experience';
import Projects from './Projects';
import MyResume from './MyResume';

const Home = () => {
    const wrapperRef = useRef(null);


   
  return (
     <div className="flex flex-col items-center justify-center bg-[#020617] ">
       <div className="container mx-auto px-8 mt-20 lg:mt-0 pb-6  "   ref={wrapperRef}>
         <NavBar/>
          <div className='z-10 bg-transparent'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          {/* </div> */}
         {/* <Hero  scrollContainer={wrapperRef}/> */}
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

