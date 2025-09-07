import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  House,
  SquareUserRound,
  Folder,
  FileText,
  Contact,
} from "lucide-react";

const NavBar = ({ navOpen, setDrawerOpen, activeSection }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  // Utility to position the highlight box
  const repositionBox = (el) => {
    if (!el || !activeBox.current) return;
    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = el;
    Object.assign(activeBox.current.style, {
      top: `${offsetTop}px`,
      left: `${offsetLeft}px`,
      width: `${offsetWidth}px`,
      height: `${offsetHeight}px`,
    });
  };

  useEffect(() => {
    if (activeSection) {
      const newHash = `#${activeSection}`;
      if (window.location.hash !== newHash) {
        window.history.replaceState(null, "", newHash);
      }
    }
  }, [activeSection]);

  // On mount, find default active link and position box
  useEffect(() => {
    const initLink = document.querySelector(
      `.nav-link[data-section="${activeSection}"]`
    );
    if (initLink) {
      initLink.classList.add("active");
      lastActiveLink.current = initLink;
      repositionBox(initLink);
    }
  }, []); // run once

  // Whenever scroll-spy reports a new activeSection, update highlight
  useEffect(() => {
    const newLink = document.querySelector(
      `.nav-link[data-section="${activeSection}"]`
    );
    if (newLink && newLink !== lastActiveLink.current) {
      lastActiveLink.current?.classList.remove("active");
      newLink.classList.add("active");
      lastActiveLink.current = newLink;
      repositionBox(newLink);
    }
  }, [activeSection]);

  // Click handler still animates and triggers drawer
  const handleClick = (e, triggerDrawer) => {
    const link = e.currentTarget;
    lastActiveLink.current?.classList.remove("active");
    link.classList.add("active");
    lastActiveLink.current = link;
    repositionBox(link);

    if (triggerDrawer) {
      setDrawerOpen(true);
    }
  };

  const navItems = [
    {
      icon: <House size={20} />,
      label: "Home",
      link: "#home",
      section: "home",
    },
    {
      icon: <SquareUserRound size={20} />,
      label: "About",
      link: "#about",
      section: "about",
    },
    {
      icon: <Folder size={20} />,
      label: "Works",
      link: "#works",
      section: "works",
    },
    // {
    //   icon: <FileText size={20} />,
    //   label: "Resume",
    //   link: "#resume",
    //   section: "resume",
    // },
    {
      icon: <Contact size={20} />,
      label: "Connect",
      link: "#home",
      section: "connect",
      triggerDrawer: true,
      classN: " mx-1 ",
    },
  ];

  return (
    <nav className={`navbar${navOpen ? " active" : " opacity-0"}`}>
      {navItems.map(({ link, classN, label, section, triggerDrawer }, idx) => (
        <a
          key={idx}
          href={link}
          data-section={section}
          className="nav-link group relative flex flex-col items-center justify-center px-1 mx-1 h-16 transition-all duration-300 tracking-wider font-bold iBrand"
          onClick={(e) => handleClick(e, triggerDrawer)}
        >
          {/* ICON */}
          <span
            className={`${classN} transition-all duration-300 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0 text-sm flex justify-center items-center gap-1`}
          >
            {" "}
            {/* {icon} */}
            {label}
          </span>

          {/* LABEL */}
          <span className="absolute opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 text-sm font-medium flex flex-row">
            {label}
          </span>
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

NavBar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  setDrawerOpen: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default NavBar;
