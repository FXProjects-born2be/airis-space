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
              <Link href="/ai-agents">AI Agents</Link>
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
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
            <div className="soc">
              <Link href="/terms-of-use">Terms of Use</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
              <Link href="/refund-policy">Refund Policy</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
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
                  <h4>Email</h4>
                  <Link href="mailto:info@airis.space">info@airis.space</Link>
                </div>
                {/**<div>
                  <h4>Phone</h4>
                  <Link href="tel:"></Link>
                </div> */}
              </div>
              <div className="soc">
                <Link href="/terms-of-use">Terms of Use</Link>
                <Link href="/cookie-policy">Cookie Policy</Link>
                <Link href="/refund-policy">Refund Policy</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
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
