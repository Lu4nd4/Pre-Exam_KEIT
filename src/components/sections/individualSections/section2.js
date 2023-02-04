import React from "react";

const Section1 = (props) => {
    const section1h1 = React.createElement("h1", {className:"section2h2", style: {fontWeight:500}}, props.section2h1);
    const section1hh1 = React.createElement("h1", {className:"section2h2" ,style: {fontWeight:500}}, props.section2hh1);
    const section1p = React.createElement("p", {className:"section2p"}, props.section2p);
    const section1img = React.createElement("img", {alt:"Other images" ,src: props.imgsrc, className: "imgSec2"});
    return (
        <>
        <div className={props.col}>
            {section1h1}
            {section1hh1}
            {section1p}
        </div>
        <div className={props.col2}>
            {section1img}
            </div>
        </>
    );
} 

export default Section1;