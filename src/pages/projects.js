import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ProjectList from './../components/projectList';
import Footer from './../components/footer';

class ProjectsPage extends Component {
    style = {
        color: "black"
    }
    titleStyle = {
        color: "#FFFFFF"
    }
    render() { 
        return ( 
            <div>
            <Container className="mx-auto text-left" style={this.style}>
                <h1 style={this.titleStyle} className="text-center">My Projects</h1>
                <ProjectList/>
            </Container>
            <Footer/>
            </div>
         );
    }
}
 
export default ProjectsPage;