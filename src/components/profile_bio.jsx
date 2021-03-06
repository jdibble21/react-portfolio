import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import profileImage from './../files/profile_image.jpg';

class ProfileBio extends Component {
    backgroundStyle = {
        position: "",
        display: "block"
    }
    render() { 
        return (
            
            <Container className="mt-5 p-5 mb-4">
                
                <Row>
                    <Col>
                        <Image className="mx-auto" src={profileImage} style={this.backgroundStyle} alt="background image" fluid roundedCircle/>
                    </Col>
                    <Col className="mx-auto" sm="8">
                        <Card className="card text-center m-5">
                            <Card.Body>Hello! My name is Jake Dibble, I am a Frontend Software Developer for RTI International based in Raleigh, NC. Check out some of my projects and feel free to download a copy of my resume!</Card.Body>
                        </Card>
                    </Col>
                </Row>
            
                
            
            </Container>
        );
    }
}
 
export default ProfileBio;