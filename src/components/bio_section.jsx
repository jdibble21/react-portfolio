import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class BioSection extends Component {
    render() { 
        return ( 
            <Card className="card text-center m-5">
                <Card.Body>Hello! My name is Jake Dibble, I am a recent graduate of Ball State University with a B.S. in Computer Science. I am currently looking for a software engineering position where I can collaborate with talented individuals and grow my skills as a developer. Check out some of my projects and feel free to download a copy of my resume!</Card.Body>
            </Card>
         );
    }
}
 
export default BioSection;