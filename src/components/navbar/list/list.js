import React from "react";
import './list.css';
import '../../../myDefault.css';

const List = (props) =>{
    let myLi= React.createElement("li", { className: "navlist" ,props}, props.text);
    return(
        <>
                {myLi}
        </>
    )
}

export default List;