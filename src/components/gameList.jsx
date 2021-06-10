import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import SO_Icon from './../files/icons/space_odyssey.png';
import Image from 'react-bootstrap/Image';
class GamesList extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col>
                        <Card className="m-4">
                            <Card.Title>Space Odyssey</Card.Title>
                            <div class="img-square-wrapper"><Image src={SO_Icon}></Image></div>
                            <Card.Body>Top-down scrolling space shooter. Shoot enemy ships and collect powerups through two levels with a unique boss at the end of each!</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="m-4">
                            <Card.Title>Spooky Invaders</Card.Title>
                            <Card.Body>Arcade inspired built with inspiration from space invaders and galaga. Theme for game was "Spooky Quarantine", created within 1 week.</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="m-4">
                            <Card.Title>Forest Runner</Card.Title>
                            <Card.Body>Side scrolling platformer style game. Collect the sword, defeat the bandit, and make it to the end to win!</Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                
            </Container>
         );
    }
}
 
export default GamesList;