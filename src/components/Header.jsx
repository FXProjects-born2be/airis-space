"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={scrolling ? "active header" : "header"}>
        <div className="_container">
          <div className="header-row">
            <div className="col-01">
              <button className="menu-btn">
                <img src="/images/menuBtn.svg" />
              </button>
              <nav>
                <Link href="/solutions">Solutions</Link>
                <Link href="#">Industries</Link>
                <Link href="#">Press Room</Link>
              </nav>
            </div>
            <div className="col-02">
              <Link href="/">
                <img src="/images/logo.svg" />
              </Link>
            </div>
            <div className="col-03">
              <Link href="#">Contact Us</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
