//godot game list here
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import GamesList from './../components/gameList';
import Footer from './../components/footer';
import MobileAlert from '../components/mobile_alert';

class GamesPage extends Component {
    style = {
        color: "black"
    }
    titleStyle = {
        color: "#FFFFFF"
    }
    render() { 
        return ( 
            <div>
            <MobileAlert/>
            <Container className="mx-auto text-left" style={this.style}>
                <h1 style={this.titleStyle} className="text-center">My Games</h1>
                <GamesList/>
            </Container>
            <Footer/>
            </div>
         );
    }
}
 
export default GamesPage;