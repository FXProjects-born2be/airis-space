import React from "react";
import "@/styles/footer.scss";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="_container">
        <div className="footer__body">
          <div className="footer-top">
            <ul className="nav">
              <li>
                <Link href="/solutions">Solutions</Link>
              </li>
              <li>
                <Link href="/industries">Industries</Link>
              </li>
              <li>
                <Link href="/aIris-standards">Standards</Link>
              </li>
              <li>
                <Link href="/how-airis-works">How Airis Works</Link>
              </li>
              <li>
                <Link href="/press-room">Press Room</Link>
              </li>
              <li>
                <Link href="/work-at-airis">Careers</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
            <div className="soc">
              <Link href="#">
                LinkedIn
                <ButtonArrow />
              </Link>
              <Link href="#">
                Facebook
                <ButtonArrow />
              </Link>
              <Link href="#">
                Instagram
                <ButtonArrow />
              </Link>
              <Link href="#">
                Twitter
                <ButtonArrow />
              </Link>
            </div>
          </div>
          <div className="footer-main">
            <div className="col-01">
              <Link href="/">
                <img src="/images/logo.svg" />
              </Link>
              <p>
                AI-powered solutions for call center automation <br />
                and lead engagement.
              </p>
            </div>
            <div className="col-02">
              <div className="addresses">
                <div>
                  <h4>Registration Address</h4>
                  <p>
                    
                  </p>
                </div>
                <div>
                  <h4>Office Address</h4>
                  <p></p>
                </div>
                <div>
                  <h4>Email</h4>
                  <Link href="mailto:info@advexio.com"></Link>
                </div>
                <div>
                  <h4>Phone</h4>
                  <Link href="tel:+48573503926"></Link>
                </div>
              </div>
              <div className="soc">
                <Link href="#">
                  LinkedIn
                  <ButtonArrow />
                </Link>
                <Link href="#">
                  Facebook
                  <ButtonArrow />
                </Link>
                <Link href="#">
                  Instagram
                  <ButtonArrow />
                </Link>
                <Link href="#">
                  Twitter
                  <ButtonArrow />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-copy">Copyright © {currentYear} Alris</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
