import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class ProjectList extends Component {
    
    render() { 
        return ( 
            <Container >
                <Row>
                    <Col>
                        <Card className="m-4">
                            <Card.Title>Content Management System</Card.Title>
                            <Card.Subtitle>Stack: PHP, MySQL, HTML/CSS, JavaScript/AJAX</Card.Subtitle>
                            <Card.Body>Library repository for Betterflye CMS. Integrates with main Betterflye codebase and provides features such as profanity filtering and image filtering via regular expression patterns and a javascript neural net. Other features include admin tools for banning users, flagging posts and providing tools for allowing posts, deleting posts, and deleting users from admin view</Card.Body>
                            <Card.Link className="m-2" href="https://github.com/jdibble21/Content-Management-System" target="_blank">View Project Repository</Card.Link>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="m-4">
                            <Card.Title>Stroke Prediction Classifier</Card.Title>
                            <Card.Subtitle>Stack: Python (pandas, numpy)</Card.Subtitle>
                            <Card.Body>Extension of a data mining project that uses stroke patient data to run tests on a descision tree to determine accuracy of classifier. Uses pandas and numpy libraries for csv data processing, and follows K-fold testing procedure. Currently, only 39% accurate at determining whether a stroke will occur or not, with no machine learning libraries used. Hopefully I can get that number up! </Card.Body>
                            <Card.Link className="m-2" href="https://github.com/jdibble21/Stroke-Prediction-Classifier" target="_blank">View Project Repository</Card.Link>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="m-4">
                            <Card.Title>Alumni Donation Website</Card.Title>
                            <Card.Subtitle>Stack: PHP, HTML/CSS, JavaScript/AJAX</Card.Subtitle>
                            <Card.Body>Site for my fraternity's alumni to read latest newsletters, and donate funds directly to the chapter. Uses PHP on the backend to record payments made and by who (no payment info stored) and for an administrative login to upload new alumni newsletters without me having to code it in!</Card.Body>
                            <Card.Link className="m-2" href="https://github.com/jdibble21/PKP-IN-IOTA-Alum-Site" target="_blank">View Project Repository</Card.Link>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="m-4">
                            <Card.Title>Random Cipher Program</Card.Title>
                            <Card.Subtitle>Stack: Python</Card.Subtitle>
                            <Card.Body>Python script used to encrypt and decrypt simple strings of data. Program generates a randomized mapping of characters, and uses that to encrypt data to make it effectively unreadable and impossible to decrypt without the generated mapping. Decrypts a string using the same mapping</Card.Body>
                            <Card.Link className="m-2" href="https://github.com/jdibble21/Random-Cipher" target="_blank">View Project Repository</Card.Link>                        
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="m-4">
                            <Card.Title>Project Title</Card.Title>
                            <Card.Body>Project description here</Card.Body>
                            <Card.Link className="m-2" href="#" target="_blank">View Project Repository</Card.Link>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="m-4">
                            <Card.Title>Project Title</Card.Title>
                            <Card.Body>Project description here</Card.Body>
                            <Card.Link className="m-2" href="#" target="_blank">View Project Repository</Card.Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default ProjectList;