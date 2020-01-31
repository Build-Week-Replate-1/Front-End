import React from 'react';
// import logo from './logo.svg';
import { Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import MainBody from "./components/MainBody";

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Route exact path="/" component={ MainBody }/>
    </div>
  );
}

export default App;
