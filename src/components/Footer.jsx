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
                <Link href="#">Solutions</Link>
              </li>
              <li>
                <Link href="#">Industries</Link>
              </li>
              <li>
                <Link href="/aIris-standards">Standards</Link>
              </li>
              <li>
                <Link href="/how-airis-works">How AIris Works</Link>
              </li>
              <li>
                <Link href="#">Press Room</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
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
                    86 Hoża street, Unit 210, Warsaw, Postcode 00-682, Poland
                  </p>
                </div>
                <div>
                  <h4>Office Address</h4>
                  <p>Królowej Marysieńki 90/lok. 7, 02-954 Warsaw</p>
                </div>
                <div>
                  <h4>Email</h4>
                  <Link href="mailto:info@advexio.com"></Link>
                </div>
                <div>
                  <h4>Phone</h4>
                  <Link href="tel:+48573503926">+48573503926</Link>
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
