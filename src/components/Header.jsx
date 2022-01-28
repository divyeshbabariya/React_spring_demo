import React,{Fragment, useState} from "react";
import Page1 from "./Page1";
import Menu from "./Menu";

const Header = () => {


    const [toggle, setToggle] = useState(true);

    const menuClick =() => {
        setToggle(!toggle);
    }

    return(<Fragment>

<div className="container-fluid m-0 p-0" style={{backgroundColor:"#e5e5e5" ,width:"100%"}}>
    <div className="row">
        <div className="col-11 m-auto">
        <div className="row mt-3 display-flex justify-content-between align-items-center">
              <div className="col-2">
                <h2 className="my-0 logot1" style={{cursor:"pointer"}}>
                  J<span className="spantext st1">OMOR</span>
                </h2>
                <h2 className="mx-5 my-0 logot2" style={{cursor:"pointer"}}>
                  D<span className="spantext st2">ESIGN</span>
                </h2>
              </div>
              <div className="col-1">
                <h2 className="menut" onClick={menuClick} style={{cursor:"pointer"}}>
                  M<span className="spantext st3">ENU</span>
                </h2>
              </div>
            </div>
        </div>
    </div>
</div>

{toggle? <Page1 /> : <Menu />}

    </Fragment>)
}

export default Header