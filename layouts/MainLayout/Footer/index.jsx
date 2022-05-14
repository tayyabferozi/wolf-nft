import React from "react";
import Link from "next/link";

import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";

const Footer = () => {
  return (
    <Section id="footer">
      <GridContainer rowClassName="main-row">
        <div className="col-lg-4">
          <Link href="/">
            <img src="/assets/imgs/logo.png" alt="logo" />
          </Link>
          <p className="mt-10 tint">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>

          <div className="mt-20 social">
            <a href="#0">
              <img src="/assets/imgs/social-linkedin.png" alt="linkedin" />
            </a>
            <a href="#0">
              <img src="/assets/imgs/social-insta.png" alt="insta" />
            </a>
            <a href="#0">
              <img src="/assets/imgs/social-discord.png" alt="discord" />
            </a>
            <a href="#0">
              <img src="/assets/imgs/social-twitter.png" alt="twitter" />
            </a>
            <a href="#0">
              <img src="/assets/imgs/social-telegram.png" alt="telegram" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="row gy-4">
            <div className="col-md-6">
              <strong className="d-block fs-18 mb-20 pb-1">Main Link</strong>

              <div className="links">
                <Link href="/">Home</Link>
                <Link href="/">About Us</Link>
                <Link href="/">Step</Link>
                <Link href="/">Roadmap</Link>
              </div>
            </div>
            <div className="col-md-6">
              <strong className="d-block fs-18 mb-20 pb-1">Support</strong>

              <div className="links">
                <Link href="/">FAQs</Link>
                <Link href="/">Privacy Policy</Link>
                <Link href="/">Terms &amp; Conditions</Link>
                <Link href="/">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <strong className="d-block fs-18 mb-20 pb-1">
            Subscribe To Our Newsletter
          </strong>

          <div className="input-container">
            <input type="email" placeholder="Enter Your Email Address" />
            <button className="btn">
              <img src="/assets/imgs/chevron-right-black.png" alt="chevron" />
            </button>
          </div>
          <div className="links mt-2 pt-1">
            <Link href="/">Create Your Account</Link>
          </div>
        </div>
      </GridContainer>

      <div className="copyright">
        Copyright @ 2022 Your Company. All rights reserved.
      </div>
    </Section>
  );
};

export default Footer;
