import Link from "next/link";
import React from "react";
import "@/styles/header.scss";

const Header = () => {
  return (
    <>
      <header>
        <div className="_container">
          <div className="header-row">
            <div className="col-01">
              <button className="menu-btn">
                <img src="/images/menuBtn.svg" />
              </button>
              <nav>
                <Link href="#">Solutions</Link>
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
