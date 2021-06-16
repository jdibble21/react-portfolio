import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class PageButtons extends Component {
    state = {  }
    render() { 
        return (
            <Container className="mx-auto">
                <Row>
                    <Col>
                        <Button className="mx-auto m-5 round" href="https://jdibble21.github.io/react-portfolio/#/projects" size="lg" block>Projects</Button>
                    </Col>
                    <Col sm="1"></Col>
                    <Col>
                        <Button className="mx-auto m-5 round" href="https://jdibble21.github.io/react-portfolio/#/games" size="lg" block>Games</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default PageButtons;