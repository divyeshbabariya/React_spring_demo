import React, {Fragment, useState} from "react";

import {NavLink} from "react-router-dom";
import {useSpring, animated} from "react-spring";


const Menu = () => {
const menutext = useSpring({
    config: { duration: 700 },
    to: { transform: "translateY(0px) rotate(180deg)" },
    from: { transform: "translateY(-500px) rotate(180deg)" },
  });


    return(
        <Fragment>
            <div className="container-fluid" style={{backgroundColor:"#e5e5e5"}}>
            <div className="row"></div>
            <div className="col-12 menubox">
            <div className="row mt-3 display-flex justify-content-between align-items-center">
              
              <div className="row">
                  <div className="col-2 p-2 m-auto d-flex justify-content-center align-items-center" style={{height:"85vh", borderRight:"3px solid black"}}>
                     <animated.h1 style={menutext} className="menuname"><NavLink to="/" className="linkt">HOME</NavLink></animated.h1>
                  </div>
                  <div className="col-2 p-2 m-auto d-flex justify-content-center align-items-center" style={{height:"85vh", borderRight:"3px solid black"}}>
                      <animated.h1 style={menutext} className="menuname"><NavLink to="/about" className="linkt">ABOUT</NavLink></animated.h1>
                  </div>
                  <div className="col-2 p-2 m-auto d-flex justify-content-center align-items-center" style={{height:"85vh", borderRight:"3px solid black"}}>
                      <animated.h1 style={menutext} className="menuname"><NavLink to="/contact" className="linkt">CONTACT</NavLink></animated.h1>
                  </div>
                  <div className="col-2 p-2 m-auto">

                  </div>
              </div>
            </div>

            </div>
         
            </div>


        </Fragment>
    );
}

export default Menu;