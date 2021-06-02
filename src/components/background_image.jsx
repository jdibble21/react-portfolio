import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import backImage from './../files/background_image.jpg';

class BackgroundImage extends Component {
    
    backgroundStyle = {
        position: "absolute",
        display: "block"
    }
    render() { 
        return (
            <div>
                <Image src={backImage} style={this.backgroundStyle} alt="background image" fluid />
            </div>
        );
    }
}
 
export default BackgroundImage;