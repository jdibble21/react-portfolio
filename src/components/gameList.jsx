import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import SO_Icon from './../files/icons/space_odyssey.png';
import SI_Icon from './../files/icons/spooky_invaders.png';
import FR_Icon from './../files/icons/forest_run_icon.png';
import Image from 'react-bootstrap/Image';

class GamesList extends Component {
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col>
                        <Card className="m-4">
                            <Card.Title>Space Odyssey</Card.Title>
                            <div class="img-square-wrapper"><Image src={SO_Icon}></Image></div>
                            <Card.Subtitle className="m-4">Development Duration: 5 weeks</Card.Subtitle>
                            <Card.Body>Top-down scrolling space shooter. Shoot enemy ships and collect powerups through two levels with a unique boss at the end of each! Created with inspriation from Galaga.</Card.Body>
                            <Card.Link className="m-2" href="https://bsu-cs315.github.io/FP-Space-Odyssey/" target="_blank">Play!</Card.Link>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="m-4">
                            <Card.Title>Spooky Invaders</Card.Title>
                            <div class="img-square-wrapper"><Image src={SI_Icon}></Image></div>
                            <Card.Subtitle className="m-4">Development Duration: 1 week</Card.Subtitle>
                            <Card.Body>Arcade inspired built with inspiration from Space Invaders. Shoot down the enemy skulls as you dodge their bone missles! Theme for game was "Spooky Quarantine", created within 1 week. Fun fact: All the visuals you see were done from scratch by me!</Card.Body>
                            <Card.Link className="m-2" href="https://bsu-cs315.github.io/FP-Space-Odyssey/" target="_blank">Play!</Card.Link>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="m-4">
                            <Card.Title>Forest Runner</Card.Title>
                            <div class="img-square-wrapper"><Image src={FR_Icon}></Image></div>
                            <Card.Subtitle className="m-4">Development Duration: 2 weeks</Card.Subtitle>
                            <Card.Body>Side scrolling platformer style game, a sort of hybrid between Mario and the Legend of Zelda. Collect the sword, defeat the bandit, and make it to the end to win!</Card.Body>
                            <Card.Link className="m-2" href="https://bsu-cs315.github.io/FP-Space-Odyssey/" target="_blank">Play!</Card.Link>
                        </Card>
                    </Col>
                </Row>
                
                
            </Container>
         );
    }
}
 
export default GamesList;