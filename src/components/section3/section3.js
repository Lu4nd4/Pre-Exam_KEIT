import React from "react";
import './section3.css';
import '../../myDefault.css';
import Tracing from "./tracking/tracing";
import group13 from "../../images/Group 13.png";

const Section3 = () =>{
    return (
        <div className="row section3">
            <div className="col-6 section3img"><img src={group13} ></img></div>
            
            <Tracing/>
        </div>
    );
}

export default Section3;