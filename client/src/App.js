<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </Router>
=======
import React from 'react';
// import { useState } from 'react';
// import 'bootstap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/Login/Login.jsx'
import SignUp from './pages/Login/SignUp.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
>>>>>>> ce6d851b23cc3841fe1929d9b711dbd92a99c204
  );
}

export default App;
