import React from "react";

const Section1 = (props) => {
    const section1h1 = React.createElement("h1", {className:"section1h1"}, "Order Products");
    const section1hh1 = React.createElement("h1", {className:"section1h1"},"Faster Eastier");
    const section1p = React.createElement("p", {className:"section1p"},"Order your favorite foods at any time and we will deliver them right to whereyou are.");
    const section1img = React.createElement("img", {alt:"First image" ,src: props.imgsrc});
    let section1button = React.createElement("button",{className:"section1button"},"Get Started");
        
    return (
        <>
        <div className={props.col}>
            {section1h1}
            {section1hh1}
            {section1p}
            {section1button}
        </div>
        <div className={props.col2}>
            {section1img}
            </div>
        </>
    );
} 

export default Section1;