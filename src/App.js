import './App.css';
import React from 'react';
//import App from './App';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
// import Footer from "./Component/ Footer";
// import Product from './Component/Product';

const App = () => {

  return (


    <>
      <Navbar />

      {/* <Switch> */}
      <Route path="/" element={Home}>
      </Route>
      {/* </Switch> */}

    </>


  )
};
export default App;
