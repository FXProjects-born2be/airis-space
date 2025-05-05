"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();

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

  const menuOpen = () => {
    setMenuOpened(!menuOpened);
    //document.body.classList.toggle("no-scroll", !menuOpened);
  };

  useEffect(() => {
    setMenuOpened(false);
    //document.body.classList.remove("no-scroll");
  }, [pathname]);

  return (
    <>
      <header className={scrolling ? "active header" : "header"}>
        <div className="_container">
          <div className="header-row">
            <div className="col-01">
              <button
                onClick={() => menuOpen()}
                className={`menu-btn ${menuOpened ? "active" : ""}`}
              >
                <span></span>
                <span></span>
              </button>
              <nav>
                <Link href="/success-stories">Success Stories</Link>
                <Link href="/industries">Industries</Link>
                <Link href="/cases">Cases</Link>
              </nav>
            </div>
            <div className="col-02">
              <Link href="/">
                <img src="/images/logo.svg" />
              </Link>
            </div>
            <div className="col-03">
              <Link href="/contact-us">Contact Us</Link>
            </div>
          </div>
        </div>
      </header>
      <div className={`menu-wrap ${menuOpened ? "opened" : ""}`}>
        <div className="menu">
          <nav>
            <Link href="/how-airis-works">How Airis Works</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/aIris-standards">Standards</Link>
            <Link className="mob" href="/success-stories">
              Success Stories
            </Link>
            <Link className="mob" href="/industries">
              Industries
            </Link>

            <Link className="mob" href="/cases">
              Cases
            </Link>
            <Link href="/contact-us">Contact Us</Link>
          </nav>
          <div className="bottom">
            <Link href="mailto:info@airis.space">info@airis.space</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
