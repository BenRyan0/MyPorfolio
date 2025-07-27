import { useRef, useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Components
import Header from "./../components/Header";
import HeaderMobile from "./../components/HeaderMobile";
import HeroModel from "./../components/HeroModel";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import Projects from "./Projects";
import MyResume from "./MyResume";

const Home = () => {
  const wrapperRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const sectionComponents = [
    <HeroModel
      key="hero"
      drawerOpen={drawerOpen}
      setDrawerOpen={setDrawerOpen}
      scrollContainer={wrapperRef}
      href="/"
    />,
    <AboutMe key="about" href="#about" />,
    <Technologies key="tech" href="#work" />,
    <Projects key="proj" />,
    <MyResume key="resume" />,
  ];

  useEffect(() => {
    let frame;

    const revealNext = () => {
      setVisibleCount((prev) => {
        if (prev < sectionComponents.length) {
          frame = setTimeout(revealNext, 500);
          return prev + 1;
        }
        return prev;
      });
    };

    frame = setTimeout(revealNext, 500);
    return () => clearTimeout(frame);
  }, [sectionComponents.length]);

  return (
    <div className="flex flex-col items-center justify-center bg-[#020617]">
      <div className="container mx-auto px-6 md:px-28 lg:mt-6 wrapper" ref={wrapperRef}>
        <Header setDrawerOpen={setDrawerOpen} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px" }}
        >
          {sectionComponents.slice(0, visibleCount).map((Component) => Component)}
        </motion.div>
        <HeaderMobile setDrawerOpen={setDrawerOpen} />
      </div>
    </div>
  );
};

export default Home;
