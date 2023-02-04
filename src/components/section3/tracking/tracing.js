import React from "react";
import '../../../myDefault.css';
import Buttons from "./buttons/buttons";
import apple from "../../../images/Vector.png";
import google from "../../../images/Vector (1).png";


const Tracing = () =>{
    
    return (
        <div className="col-5">
            <h2 className="tracingh1">Watch Your Delivery</h2>
            <h2 className="tracingh1">At Any Time</h2>
            <p className="tracingp">With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!</p>
            <div className="row">
            <Buttons text="App Store"><img src={apple} style={{margin: "-4px 10px 0 5px"}}></img></Buttons>
            <Buttons text="Google Play"><img src={google} style={{margin: "-4px 10px 0 5px"}}></img></Buttons>
            </div>
        </div>
    );
}

export default Tracing;