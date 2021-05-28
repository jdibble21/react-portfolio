import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg bg-light navbar-light ">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Jake Dibble</a>
              <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="#">View Projects</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Play Games</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}
 
export default Navbar;