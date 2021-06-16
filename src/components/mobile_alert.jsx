import React, { Component } from 'react';
import {MobileView} from 'react-device-detect';

class MobileAlert extends Component {
    state = {  }
    render() { 
        return ( 
            <MobileView>
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    Unfortunately, games will not work on mobile devices. Please switch to a computer with a mouse and keyboard to play!
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </MobileView>
         );
    }
}
 
export default MobileAlert;