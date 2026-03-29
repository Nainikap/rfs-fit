"use client"
import React from "react";
import "../styles/Navbar.css";
import { useState, useEffect } from "react";

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
          <a href="/">HOME</a>
          <a href="/">ABOUT US</a>
          <a  href="/apply">APPLY NOW</a>
        </nav>
      </header>
      
    </div>
    </>
  );
};

export default Navbar;
