import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ProjectList from './../components/projectList';

class ProjectsPage extends Component {
    style = {
        color: "black"
    }
    titleStyle = {
        color: "#FFFFFF"
    }
    render() { 
        return ( 
            <Container className="mx-auto text-left" style={this.style}>
                <h1 style={this.titleStyle} className="text-center">My Projects</h1>
                <ProjectList/>
            </Container>

         );
    }
}
 
export default ProjectsPage;