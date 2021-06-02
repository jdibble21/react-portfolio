import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavbarCustom extends Component {
    state = {  }
    render() { 
        return ( 
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Jacob Dibble</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Projects</Nav.Link>
              <Nav.Link href="#link">Games</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        );
    }
}
 
export default NavbarCustom;