import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap';
import 'popper.js/dist/popper';
import 'jquery/dist/jquery';
import NavbarCustom from './components/navbar';
import BackgroundImage from './components/background_image';
import BioSection from './components/bio_section';
import DetailsSection from './components/details_section';
import PageButtons from './components/buttons';
import ContactSection from './components/contact';

ReactDOM.render(<NavbarCustom />, document.getElementById("navDiv"));

ReactDOM.render(<BackgroundImage />, document.getElementById("backImageDiv"));

ReactDOM.render(<BioSection />, document.getElementById("bioDiv"));

ReactDOM.render(<DetailsSection />, document.getElementById("detailsDiv"));

ReactDOM.render(<PageButtons/>, document.getElementById("buttonDiv"));

ReactDOM.render(<ContactSection />,document.getElementById("contactDiv"));