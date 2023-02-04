import React from "react";

const Box = (props) =>{

    const boxh3 = React.createElement("h3",{className:"boxh4"},props.h3text);
    const boxp = React.createElement("p",{className:"boxp"},props.ptext);
    const boxh4 = React.createElement("h4",{className:"boxh5"},"Learn More");
    const img = React.createElement("img", {src:props.source, alt:"image"})

    return (
        <div className=" col-3 defaultBorder box">
            {boxh3}
            {img}
            {boxp}
            {boxh4}
        </div>
    );
}

export default Box;