import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

class Footer extends Component {
    
    render() { 
        return ( 
            <footer className="footer">
                <Container >
                    <div class="footer-copyright text-center py-3">© 2021 Copyright: Jacob Dibble</div>
                </Container>
            </footer>
         );
    }
}
 
export default Footer;