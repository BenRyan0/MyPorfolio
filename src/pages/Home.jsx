import { useRef, useEffect, useState } from 'react';
// import your components
import NavBar from './../components/NavBar';
import Hero from './../components/Hero';
import Hero2 from './../components/Hero2';
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
    <Hero scrollContainer={wrapperRef} key="hero" />,
    <Hero2 scrollContainer={wrapperRef} key="hero2" />,
    <AboutMe key="about" />,
    <Technologies key="tech" />,
    <Experience key="exp" />,
    <Projects key="proj" />,
    <MyResume key="resume" />
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-[#020617]">
      <div className="container mx-auto px-8 mt-20 lg:mt-0 pb-6 wrapper" ref={wrapperRef}>
        <NavBar />
        {sectionComponents.slice(0, visibleCount)}
      </div>
    </div>
  );
};

export default Home;
