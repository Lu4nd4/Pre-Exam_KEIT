import React from "react";
import './boxes.css';
import '../../myDefault.css';
import Box from "./littleboxes.js/box";
import img1 from "../../images/Group 3.png";
import img2 from "../../images/Group 4.png";
import img3 from "../../images/Group 5.png";

const Boxes = () =>{
    return(
        <div className="services">
            <h1 className="servicesh1">Some Services We Offer</h1>
            <div className="row littleboxes">
            <Box  h3text="Payment Done" ptext="Pay with a Visa or PayPal card and without much ado." source={img1}/>
            <Box  h3text="Find Your Product" ptext="We offer sale of products through the Internet."source={img2}/>
            <Box  h3text="Product Received" ptext="In our app you can see the delay time of your order." source={img3}/>
            </div>
        </div>
    );
}

export default Boxes;
