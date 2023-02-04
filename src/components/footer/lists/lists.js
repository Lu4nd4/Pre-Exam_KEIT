import React from "react";

const Lists = (props) =>{
    const li = React.createElement("li", {className:"footerlist"},props.children,props.text);
    return (
        <>
            {li}
        </>
    );
}

export default Lists;