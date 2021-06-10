//godot game list here
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import GamesList from './../components/gameList';
import Footer from './../components/footer';

class GamesPage extends Component {
    style = {
        color: "black"
    }
    titleStyle = {
        color: "#FFFFFF"
    }
    render() { 
        return ( 
            <Container className="mx-auto text-left" style={this.style}>
                <h1 style={this.titleStyle} className="text-center">Game page</h1>
                <GamesList/>
                <Footer/>
            </Container>
            
         );
    }
}
 
export default GamesPage;