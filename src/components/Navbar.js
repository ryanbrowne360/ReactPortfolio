import React from "react";
import { NavLink } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import "./myStyles.css"


export default function Navbar() {
  return (
    <div id="nav">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><a href="https://github.com/ryanbrowne360">Connect With Me On Github</a></li>
        <li><a href="https://github.com/ryanbrowne360/PortfolioPageUpdate1/blob/main/Ryan%20Browne%20Web%20Developer%20Resume%20.pdf">Please See My Resume Here</a></li>
      </ul>

    </div>

  );
}

/*<ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>*/


// <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
// <ReactBootStrap.Navbar.Brand href="">Ryan Browne Web Developer</ReactBootStrap.Navbar.Brand>
// <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
// <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
//   <ReactBootStrap.Nav className="mr-auto">
//     <ReactBootStrap.NavDropdown title="Navigate My Site" id="collasible-nav-dropdown">
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/portfolio">Portfolio</NavLink>
//       <NavLink to="/contact">Contact</NavLink>
//       <ReactBootStrap.NavDropdown.Divider />
//       <ReactBootStrap.NavDropdown.Item href="https://github.com/ryanbrowne360">Connect With Me On GitHub!</ReactBootStrap.NavDropdown.Item>
//     </ReactBootStrap.NavDropdown>
//   </ReactBootStrap.Nav>
//   <ReactBootStrap.Nav>
//     <ReactBootStrap.Nav.Link href="https://github.com/ryanbrowne360/PortfolioPageUpdate1/blob/main/Ryan%20Browne%20Web%20Developer%20Resume%20.pdf">Please See My Resume Here</ReactBootStrap.Nav.Link>
//   </ReactBootStrap.Nav>
// </ReactBootStrap.Navbar.Collapse>
// </ReactBootStrap.Navbar>

//<ReactBootStrap.NavDropdown.Item>Portfolio</ReactBootStrap.NavDropdown.Item>