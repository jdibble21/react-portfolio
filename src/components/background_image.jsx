import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import picture from './../files/background_image.jpg';

class BackgroundImage extends Component {
    render() { 
        return (
            <Image src={picture} alt="background image" fluid />
        );
    }
}
 
export default BackgroundImage;