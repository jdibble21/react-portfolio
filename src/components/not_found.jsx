import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class NotFoundPage extends Component {
    style = {
        color: "#FFFFFF"
    }
    render() { 
        return ( 
            <Container style={this.style} className="mx-auto text-center">
                <Container className="m-5"></Container>
                <Row>
                    <Col><h1>404 Not Found</h1></Col>
                </Row>
                <Row>
                    <Col><p>Page requested cannot be found. <a href="/home">Let me know</a> if I made a mistake!</p></Col>
                </Row>
            </Container>
         );
    }
}
 
export default NotFoundPage;