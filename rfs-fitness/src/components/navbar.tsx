"use client"
import React from "react";
import "../styles/Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [scroller, setScroller] = useState(false);
  useEffect(() => {
    const handleScroller = () => {
      setScroller(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroller);
    return () => window.removeEventListener("scroll", handleScroller);
  }, []);
  return (
    <>
    <div className="nav">
      <header className={`header ${scroller ? "scrolled" : ""}`}>
        <nav className="navbar">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link  to="/apply">APPLY NOW</Link>
        </nav>
      </header>
     
      
    </div>
    </>
  );
};

export default Navbar;
