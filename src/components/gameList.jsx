import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';

class GamesList extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col>
                        <Card className="m-4">
                            <Card.Title>Space Odyssey</Card.Title>
                            <Card.Body>Description here</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="m-4">
                            <Card.Title>Game Name</Card.Title>
                            <Card.Body>Description here</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="m-4">
                            <Card.Title>Game Name</Card.Title>
                            <Card.Body>Description here</Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                
            </Container>
         );
    }
}
 
export default GamesList;