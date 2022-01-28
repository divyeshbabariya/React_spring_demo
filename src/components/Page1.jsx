import React, { Fragment, useState } from "react";
import { useSpring, animated } from "react-spring";
import Switchimg1 from "./Switchimg1";
import Switchimg2 from "./Switchimg2";
import Switchimg3 from "./Switchimg3";
import Switchimg4 from "./Switchimg4";
import Menu from "./Menu";


const Page1 = () => {


  
// ...pointer Effect start...............
  const[cursorX, setCursorX] = useState();
  const[cursorY, setCursorY] = useState();

  window.addEventListener('mousemove', (e)=>{
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })

  // ...pointer Effect end...............

  const overlay = useSpring({
    config: { duration: 3000 },
    to: { transform: "translateY(-2000px)" },
    from: { transform: "translateY(0px)" },
  });

  const maintext = useSpring({
    config: { duration: 1200 },
    to: { transform: "rotateX(0deg)"},
    from: { transform:"rotateX(180deg)"},
  });




  return (
    
    <Fragment>
     
      <div className="container-fluid m-0 p-0">
        <div className="row screen">
          <div className="col-12 m-0 p-0 header">      
            <div className="row m-0 p-0 p-4 m-auto screentext">
                <div className="d-flex align-items-center">
                <Switchimg1 /> <animated.h1 style={maintext} className="first">HIGH</animated.h1> 
                </div>
                <div className="d-flex justify-content-center align-items-center">
                <animated.h1 style={maintext} className="second">END</animated.h1> <Switchimg2 />
                </div>
                <div className="d-flex align-items-center">
                <Switchimg3 /> <animated.h1 style={maintext} className="third">DIGITAL</animated.h1>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                 <animated.h1 style={maintext} className="fourth">EXPERIENCES</animated.h1><Switchimg4 />
                </div>               
            </div>
            </div>
          
         
         

          <animated.div className="m-0 p-0" style={overlay}>
            <img src="./images/dark.png" className="overlay" alt="darkscreen" style={{width:"100%", height:"150vh"}} />
             </animated.div>
        </div>
      </div>
  
    </Fragment>
  );
};

export default Page1;
