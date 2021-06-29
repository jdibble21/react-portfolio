import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import pdf from './../files/jacob_dibble_resume.pdf';

class NavbarCustom extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    sizeClass: "py-3",
  }


  componentDidMount(){
    document.addEventListener("scroll", () => {
      if(window.scrollY > 0){
        //make smaller if not already
        this.setState({sizeClass:"fixed-top py-0"});
      }
      if(window.scrollY === 0){
        //make larger if not already
        this.setState({sizeClass:"static-top py-3"});
      }
    });
  }

    render() { 
        return ( 
          <Navbar ref={this.myRef} id="navBarOverride" expand="lg" className={this.state.sizeClass}>
            <Navbar.Brand  href="https://jacobdibble.net/">Jacob Dibble</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link  href="https://jacobdibble.net/react-portfolio/#/projects">Projects</Nav.Link>
                <Nav.Link  href="https://jdibble21.github.io/react-portfolio/#/games">Games</Nav.Link>
                <Nav.Link  href="https://jdibble21.github.io/react-portfolio/#/contact">Contact</Nav.Link>
                <Nav.Link  href={pdf} without rel="noopener noreferrer" target="_blank">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default NavbarCustom;