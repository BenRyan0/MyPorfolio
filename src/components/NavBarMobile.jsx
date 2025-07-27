// NavBarMobile.jsx
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { House, SquareUserRound, Folder, FileText, Contact } from "lucide-react";

const NavBarMobile = ({ navOpen, setDrawerOpen, activeSection }) => {
  const lastActiveLink = useRef(null);
  const activeBox      = useRef(null);

  // Utility to move the highlight box
  const repositionBox = (el) => {
    if (!el || !activeBox.current) return;
    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = el;
    Object.assign(activeBox.current.style, {
      top:    `${offsetTop}px`,
      left:   `${offsetLeft}px`,
      width:  `${offsetWidth}px`,
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


  // 1) On mount, init the box to whatever link has .active
  useEffect(() => {
    const initLink = document.querySelector(".navbarMobile .nav-link.active");
    if (initLink) {
      lastActiveLink.current = initLink;
      repositionBox(initLink);
    }
  }, []);

  // 2) On scroll-spy change, swap .active and move the box
  useEffect(() => {
    const newLink = document.querySelector(
      `.navbarMobile .nav-link[data-section="${activeSection}"]`
    );
    if (newLink && newLink !== lastActiveLink.current) {
      lastActiveLink.current?.classList.remove("active");
      newLink.classList.add("active");
      lastActiveLink.current = newLink;
      repositionBox(newLink);
    }
  }, [activeSection]);

  // 3) On click, still handle your original active-box + drawer logic
  const handleClick = (e, triggerDrawer) => {
    const link = e.currentTarget;
    lastActiveLink.current?.classList.remove("active");
    link.classList.add("active");
    lastActiveLink.current = link;
    repositionBox(link);

    if (triggerDrawer) setDrawerOpen(true);
  };

 const navItems = [
    {
      icon: <House size={28} />,
      label: "Home",
      link: "#home",
      section: "home",
    },
    {
      icon: <SquareUserRound size={28} />,
      label: "About",
      link: "#about",
      section: "about",
    },
    {
      icon: <Folder size={28} />,
      label: "Works",
      link: "#works",
      section: "works",
    },
    {
      icon: <FileText size={28} />,
      label: "Resume",
      link: "#resume",
      section: "resume",
    },
    {
      icon: <Contact size={28} />,
      label: "Connect",
      link: "#home",
      section: "connect",
      triggerDrawer: true,
    },
  ];

  return (
    <nav className={`navbarMobile ${navOpen ? "active" : "opacity-0"}`}>
      {navItems.map(({ icon, label, link, section, triggerDrawer }, idx) => (
        <a
          key={idx}
          href={link}
          data-section={section}
          className={`nav-link group relative flex flex-col items-center justify-center w-16 h-16 transition-all duration-300
            ${section === activeSection ? "active" : ""}`}
          onClick={(e) => handleClick(e, triggerDrawer)}
        >
          <span className="transition-all duration-300 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0">
            {icon}
          </span>

          <span className="absolute opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 text-base font-medium">
            {label}
          </span>
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

NavBarMobile.propTypes = {
  navOpen:       PropTypes.bool.isRequired,
  setDrawerOpen: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default NavBarMobile;
