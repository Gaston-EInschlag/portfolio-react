import React from "react";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Nav className="Navigation">
      <Link to="/Hero" className="Link">
        Home
      </Link>

      <Link to="/Contact" className="Link" disabled>
        Contact
      </Link>
    </Nav>
  );
}

export default NavBar;
