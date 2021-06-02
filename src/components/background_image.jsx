import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import backImage from './../files/background_image.jpg';
import profileImage from './../files/profile_image.jpg';

class BackgroundImage extends Component {
    render() { 
        return (
            <div>
                <Image src={backImage} alt="background image" fluid />
                <Image className="mx-auto d-block" src={profileImage} alt="profile image" roundedCircle fluid/>
            </div>
        );
    }
}
 
export default BackgroundImage;