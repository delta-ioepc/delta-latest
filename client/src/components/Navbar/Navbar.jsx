import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const navbar = useRef();
  const navbg = useRef();

  const [icon, setIcon] = useState(faBars);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (navbar.current && navbg.current) {
      navbar.current.classList.toggle("active");
      navbg.current.classList.toggle("active");

      navbg.current.style.height = `100vh`;
      // USE THIS METHOD WHENEVER YOU WANT TO DYNAMICALLY SET THE HEIGHT OF NAV-BG CLASS
      // const navbarHeight = navbar.current.scrollHeight;
      // navbg.current.style.height = `${navbarHeight}px`;

      setIcon((prevIcon) => (prevIcon === faBars ? faXmark : faBars));
    }
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <img
            src={
              windowWidth <= 980
                ? "/delta-logo/delta-logo-with-text-768.svg"
                : "/delta-logo/delta-logo-with-text-1320.svg"
            }
            alt="Logo"
          />
        </Link>
        <FontAwesomeIcon icon={icon} onClick={toggleMenu} id="menu-icon" />
        <nav className="navbar" ref={navbar}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/sponsors">Sponsors</Link>
          <Link to="/committee">Committe</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="nav-bg" ref={navbg}></div>
      </header>
    </>
  );
};

export default Navbar;
