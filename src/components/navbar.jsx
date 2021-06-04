import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavbarCustom extends Component {
  style = {
    color: "#FFFFFF"
  }
    render() { 
        return ( 
          <Navbar id="navBarOverride" expand="lg" className="py-3">
          <Navbar.Brand style = {this.style} href="/">Jacob Dibble</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link style={this.style} href="/projects">Projects</Nav.Link>
              <Nav.Link style={this.style} href="/games">Games</Nav.Link>
              <Nav.Link style={this.style} href="#contact">Contact</Nav.Link>
              <Nav.Link style={this.style} href="#resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        );
    }
}
 
export default NavbarCustom;