import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
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
        "background-color": "#959794"
    }
    render() { 
        return ( 
            <Container className="mx-auto">
                <Row className="rounded m-1" style={this.styles}>
                    <Col className="text-center m-2">
                    <Card style={this.style}>
                        <Card.Title>Skills</Card.Title>
                        <Container>
                            <Row className="m-4">
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
                    
                    <Col className="text-center m-2">
                    <Card style={this.style}>
                        <Card.Title>Experience</Card.Title>
                        <ListGroup className="text-left">
                            <ListGroup.Item>
                                <Card>
                                    <Card.Title className="font-weight-bold">Betterflye Content Management System</Card.Title>
                                    <Card.Text className="exp-descript" >Senior year capstone project. Using PHP, MySQL and HTML/CSS. Built user post management features, such as profanity and image filters and administrative tools for banning users, deleting posts, and user organization tools</Card.Text>
                                </Card>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Card>
                                    <Card.Title className="font-weight-bold">MonoSol Information Technology Intern</Card.Title>
                                    <Card.Text className="exp-descript" >Developed a service dashboard for the IT department. Using Python, PowerShell and HTML/CSS, displayed status of various department servers and IT services. Retrieved vital info like data backup status, firewall status and current users in the Active Directory</Card.Text>
                                </Card>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default DetailsSection;