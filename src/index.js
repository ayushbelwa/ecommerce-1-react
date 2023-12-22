import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Component/Navbar';

import reportWebVitals from './reportWebVitals';
import Product from './Component/Product';
import Home from './Component/Home';
// import Footer from './Component/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navbar /><Home />
    </React.StrictMode>
);



