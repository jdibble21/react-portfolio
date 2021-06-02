import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
class ContactSection extends Component {
    styles = {
        color: "black",
        "background-color": "#E9322E"
    }
    cardStyle = {
        width: "60rem"
    }
    render() { 
        return ( 
            <Container style={this.styles} className="mx-auto rounded m-5 text-center">
                <Row>
                <Card className="m-5 mt-5 mx-auto" style={this.cardStyle}>
                    <Card.Title>Contact</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Email: <a href="mailto:jrdibble98@outlook.com">jrdibble98@outlook.com</a></ListGroup.Item>
                        <ListGroup.Item>Phone: 219-929-8183</ListGroup.Item>
                        <ListGroup.Item>LinkedIn: <a href="https://www.linkedin.com/in/jacob-dibble-397896169/" target="_blank">Jacob Dibble</a></ListGroup.Item>
                    </ListGroup>
                </Card>
                </Row>
            </Container>
         );
    }
}

export default ContactSection;