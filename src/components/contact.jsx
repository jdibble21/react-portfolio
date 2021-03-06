import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import pdf from './../files/jacob_dibble_resume.pdf';

class ContactSection extends Component {
    styles = {
        color: "black",
        "background-color": "#959794"
    }
    cardStyle = {
        width: "60rem"
    }
    render() { 
        return ( 
            <Container id="contactContainer" style={this.styles} className="mx-auto rounded m-5 text-center">
                <Row>
                <Card className="m-5 mt-5 mx-auto" style={this.cardStyle}>
                    <Card.Title>Contact</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item><Button id="getPdf" className="mx-auto round" href={pdf} without rel="noopener noreferrer" target="_blank">View Resume</Button></ListGroup.Item>
                        <ListGroup.Item>Email: <a href="mailto:jrdibble98@outlook.com">jrdibble98@outlook.com</a></ListGroup.Item>
                        <ListGroup.Item>Phone: 219-929-8183</ListGroup.Item>
                        <ListGroup.Item>LinkedIn: <a href="https://www.linkedin.com/in/jacob-dibble-397896169/">Jacob Dibble</a></ListGroup.Item>
                    </ListGroup>
                </Card>
                </Row>
            </Container>
         );
    }
}

export default ContactSection;