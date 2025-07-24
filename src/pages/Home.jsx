import { useRef, useEffect, useState } from 'react';
// import your components
import NavBar from './../components/NavBar';
import Header from './../components/Header';
import HeaderMobile from './../components/HeaderMobile';
import Hero from './../components/Hero';
import Hero2 from './../components/Hero2';
import HeroModel from './../components/HeroModel';
import AboutMe from './AboutMe';
import Technologies from './Technologies';
import Experience from './Experience';
import Projects from './Projects';
import MyResume from './MyResume';

const Home = () => {
  const wrapperRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(1);

  // Sequential reveal
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < 7) return prev + 1; // Total of 7 sections
        clearInterval(interval);
        return prev;
      });
    }, 500); // Time between reveals

    return () => clearInterval(interval);
  }, []);

  const sectionComponents = [
    // <Hero2 scrollContainer={wrapperRef} key="hero2" />,
     <HeroModel scrollContainer={wrapperRef} key="hero" href="/"/>,
    // <Hero scrollContainer={wrapperRef} key="hero" />,
   
    
    <AboutMe key="about" href="#about" />,
    <Technologies key="tech" href="#work" />,
    <Projects key="proj" />,
    <MyResume key="resume" />
    
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-[#151312]">
      <div className="container mx-auto px-9 md:px-22 mt-20 lg:mt-0 6 wrapper" ref={wrapperRef}>
        <Header />
        {sectionComponents.slice(0, visibleCount)}
          <HeaderMobile />
      </div>
    </div>
  );
};

export default Home;
