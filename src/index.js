import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'; 
import Navbar from './components/navbar';
import BackgroundImage from './components/background_image';

ReactDOM.render(<Navbar />, document.getElementById("navDiv"));
ReactDOM.render(<BackgroundImage />, document.getElementById("backImageDiv"));