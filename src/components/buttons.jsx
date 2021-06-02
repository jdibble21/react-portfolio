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
                        <Button className="mx-auto" size="lg">Projects</Button>
                    </Col>
                    <Col>
                        <Button className="mx-auto" size="lg">Games</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default PageButtons;