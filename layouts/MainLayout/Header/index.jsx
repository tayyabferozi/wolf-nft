import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";

import Section from "../../../components/Section";
import NavLink from "../../../components/NavLink";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState();

  const toggleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <Section id="header" className={clsx(scrolled && "scrolled")}>
      <Link className="logo" href="/">
        <img
          className="logo"
          src="/assets/imgs/logo.png"
          alt="logo"
          title="logo"
        />
      </Link>

      <div className="hamburger d-flex d-lg-none" onClick={toggleShowMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={clsx("nav", showMenu && "show")}>
        <div className="close d-block d-lg-none mb-5" onClick={toggleShowMenu}>
          &times;
        </div>
        <img
          src="/assets/imgs/logo.png"
          alt="logo"
          className="d-block d-lg-none mb-sm-5 logo"
        />
        <NavLink href="/">Home</NavLink>
        <NavLink href="#0">About Us</NavLink>
        <NavLink href="#0">Roadmap</NavLink>
        <NavLink href="#0">F.A.Q</NavLink>
        <NavLink href="#0" className="btn btn-red">
          Register
        </NavLink>
      </div>
    </Section>
  );
};

export default Header;
