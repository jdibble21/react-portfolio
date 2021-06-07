import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import pdf from './../files/jacob_dibble_resume.pdf';

class NavbarCustom extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
    render() { 
        return ( 
          <Navbar ref={this.myRef} id="navBarOverride" expand="lg" className="fixed-top">
            <Navbar.Brand  href="/">Jacob Dibble</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link  href="/projects">Projects</Nav.Link>
                <Nav.Link  href="/games">Games</Nav.Link>
                <Nav.Link  href="#contact">Contact</Nav.Link>
                <Nav.Link  href={pdf} without rel="noopener noreferrer" target="_blank">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default NavbarCustom;