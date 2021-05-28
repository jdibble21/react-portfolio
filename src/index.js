import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'; 
import Counter from './components/counter';
import Navbar from './components/navbar';

ReactDOM.render(<Navbar />, document.getElementById('root'));