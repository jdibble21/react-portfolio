import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import backImage from './../files/background_image.jpg';

class BackgroundImage extends Component {
    backgroundStyle = {
        position: "",
        display: "block"
    }
    render() { 
        return (
            <Container>
            <div>
                <Image src={backImage} style={this.backgroundStyle} alt="background image" fluid />
            </div>
            </Container>
        );
    }
}
 
export default BackgroundImage;