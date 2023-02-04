import React from "react";

const Buttons = (props) => {
    const button = React.createElement("button",{ className:"btn row"},props.children ,props.text);
    return(
        <div>
            {button}
        </div>
    );
}

export default Buttons;