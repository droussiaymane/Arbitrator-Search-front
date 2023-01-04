import React from "react";
import "./Header.css";
import Nav from "react-bootstrap/Nav";

import LogoImg from "../../assets/images/AAA_Logo_465x100.png";
import { Navbar, NavItem, NavbarBrand, NavLink } from "reactstrap";

export default function Header() {
  return (
    <Navbar className="navbar" style={{display: "flex"}}>
      <NavbarBrand className="navbarBrand" href="/">
        <img className="logoImageLink_image" src={LogoImg} />
      </NavbarBrand>
      <div className="nav-link"  style={{marginLeft: ""}}>
        <NavLink href="https://uat.adr.org/about"> About </NavLink>
        <NavLink href="https://uat.adr.org/mediarelations"> News</NavLink>
        <NavLink href="https://stg.aaaeducation.org/courses/real-time">
          Events
        </NavLink>
        <NavLink href="https://uat.adr.org/ContactUs">Contact Us</NavLink>
      </div>
    </Navbar>
  );
}
