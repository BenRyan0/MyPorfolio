import { useRef, useEffect, useState } from "react";

import Header from "./../components/Header";
import HeaderMobile from "./../components/HeaderMobile";
import HeroModel from "./../components/HeroModel";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import MyResume from "./MyResume";
import Footer from "./../components/Footer";


// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";

const Home = () => {
  const wrapperRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");
  const [longSections, setLongSections] = useState({});

  useEffect(() => {
    const sectionEls = document.querySelectorAll("section[id]");
    const updated = {};

    sectionEls.forEach((sec) => {
      const height = sec.offsetHeight;
      updated[sec.id] = height > window.innerHeight * 1.5; // your "long" threshold
    });

    setLongSections(updated);
  }, [visibleCount]); // Recalculate when new sections appear

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((sec) => {
        const { top, bottom } = sec.getBoundingClientRect();
        if (top <= window.innerHeight / 2 && bottom > window.innerHeight / 2) {
          current = sec.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    {
      id: "home",
      element: (
        <HeroModel
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          scrollContainer={wrapperRef}
        />
      ),
    },
    {
      id: "about",
      element: <AboutMe />,
    },
    {
      id: "works",
      element: <Projects />,
    },
    {
      id: "resume",
      element: <MyResume />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center relative bg-[#00091D]">
      {/* <div className="relative h-full w-full bg-[#00091D overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#000D2B,#00091D)]"></div>
      </div> */}
      <div
        className="container mx-auto  px-6 md:px-22  lg:mt-6 wrapper relative"
        ref={wrapperRef}
      >
        <Header setDrawerOpen={setDrawerOpen} activeSection={activeSection} />
        {sectionComponents.slice(0, visibleCount).map(({ id, element }) => (
          <motion.section
            key={id}
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: longSections[id] ? 0.3 : 0.1 }}
            className="min-h-screen"
          >
            {element}
          </motion.section>
        ))}
   
        
          <HeaderMobile
            setDrawerOpen={setDrawerOpen}
            activeSection={activeSection}
          />


        <Footer  drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}/>
      </div>
    </div>
  );
};

export default Home;
