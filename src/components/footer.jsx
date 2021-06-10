import React, { Component } from 'react';

class Footer extends Component {
    style = {
        width: "100%",
        height: "10px"
    }
    render() { 
        return ( 
            
                <div id="myFooter" className="mx-auto" style={this.style}>
                    <div class="footer-copyright text-center py-3 mt-auto">© 2021 Copyright: Jacob Dibble</div>
                </div>
            
         );
    }
}
 
export default Footer;