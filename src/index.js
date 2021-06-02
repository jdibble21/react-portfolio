import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap';
import 'popper.js/dist/popper';
import 'jquery/dist/jquery';
import NavbarCustom from './components/navbar';
import BackgroundImage from './components/background_image';
import BioSection from './components/bio_section';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

ReactDOM.render(<NavbarCustom />, document.getElementById("navDiv"));

ReactDOM.render(<BackgroundImage />, document.getElementById("backImageDiv"));

ReactDOM.render(<BioSection />, document.getElementById("bioDiv"));