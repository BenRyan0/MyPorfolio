import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const NavBarMobile = () => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };
  useEffect(initActiveBox, []);
  const activeCurrentLink = (e) => {
    lastActiveLink.current?.classList.remove("active");
    e.target.classList.add("active");
    lastActiveLink.current = e.target;

    activeBox.current.style.top = e.target.offsetTop + "px";
    activeBox.current.style.left = e.target.offsetLeft + "px";
    activeBox.current.style.width =e.target.offsetWidth + "px";
    activeBox.current.style.height =e.target.offsetHeight + "px";
  };
  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Projects",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Resume",
      link: "#reviews",
      className: "nav-link",
    },
  
  ];

  return (
    <nav className={"navbarMobile active w-full flex justify-between items-center"}>
    {/* <nav className={"navbar" + (navOpen ? " active" : " opacity-0")}> */}
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          className={className}
          href={link}
          ref={ref}
          key={key}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

NavBarMobile.PropTypes = {
  navOpen: PropTypes.bool.isRequired,
};
export default NavBarMobile;
