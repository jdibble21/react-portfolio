import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import phpIcon from './../files/icons/php_icon.jpg';  //90x74
import jsIcon from './../files/icons/javascript_icon.jpg';
import mysqlIcon from './../files/icons/mysql_icon.jpg';
import pythonIcon from './../files/icons/python_icon.jpg';
import gitIcon from './../files/icons/git_icon.jpg';
import javaIcon from './../files/icons/java_icon.jpg';

class DetailsSection extends Component {
    styles = {
        color: "black",
        "background-color": "#E9322E"
    }
    render() { 
        return ( 
            <Container className="mx-auto m-5">
                <Row style={this.styles}>
                    <Col className="text-center m-4">
                    <Card style={this.style}>
                        <Card.Title>Skills</Card.Title>
                        <Container>
                            <Row className="m-3">
                                <Col>
                                    <Image src={phpIcon} />
                                </Col>
                                <Col>
                                    <Image src={jsIcon}/>
                                </Col>
                            </Row>
                            <Row className="m-3">
                                <Col>
                                    <Image src={mysqlIcon}/>
                                </Col>
                                <Col>
                                    <Image src={pythonIcon} />
                                </Col>
                            </Row>
                            <Row className="m-3">
                                <Col>
                                    <Image src={gitIcon} />
                                </Col>
                                <Col>
                                    <Image src={javaIcon} />
                                </Col>
                            </Row>
                        </Container>
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