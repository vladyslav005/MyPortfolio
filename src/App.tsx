import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
