import React, { Fragment, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Page1 from "./components/Page1";
import Menu from './components/Menu';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";



function App() {
  const[cursorX, setCursorX] = useState();
  const[cursorY, setCursorY] = useState();

  window.addEventListener('mousemove', (e)=>{
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })


  return (

    <Fragment>    
      <Header></Header>
    
      <div className="cursor m-0 p-0" style={{left:cursorX + "px", top:cursorY + "px", }}></div>
    </Fragment>
  );
}

export default App;
