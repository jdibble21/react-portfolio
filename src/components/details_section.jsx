import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class DetailsSection extends Component {
    styles = {
        color: "black",
        "background-color": "#E9322E"
    }
    render() { 
        return ( 
            <Container className="m-5">
                <Row style={this.styles}>
                    <Col className="text-center m-4">
                    <Card style={this.style}>
                        <Card.Title>Skills</Card.Title>
                        <Card.Text>
                            This will be a list of skills that I have
                        </Card.Text>
                    </Card>
                    </Col>
                    <Col className="text-center m-4">
                    <Card style={this.style}>
                        <Card.Title>Experience</Card.Title>
                        <Card.Text>
                            This will list experiences that I have with coding
                        </Card.Text>
                    </Card>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default DetailsSection;