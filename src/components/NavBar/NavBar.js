import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="home" className="links">
        Hi! Stranger
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto nav-links">
          <Link to="/education" className="links">
            {" "}
            Education
          </Link>
          <Link to="/cirtificates" className="links">
            Cirtificates
          </Link>
          <Link to="/skills" className="links">
            Skills
          </Link>
          <NavDropdown title="Projects" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"> Project 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Contact Me</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">About</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
