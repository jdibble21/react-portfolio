import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavbarCustom extends Component {
  style={
    color: "#FFFFFF"
  }
    render() { 
        return ( 
          <Navbar  id="navBarOverride" expand="lg">
            <Navbar.Brand  href="/">Jacob Dibble</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link  href="/projects">Projects</Nav.Link>
                <Nav.Link  href="/games">Games</Nav.Link>
                <Nav.Link  href="#contact">Contact</Nav.Link>
                <Nav.Link  href="#resume">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}
 
export default NavbarCustom;