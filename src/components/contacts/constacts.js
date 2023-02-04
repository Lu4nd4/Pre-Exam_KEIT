import React from "react";
import '../../myDefault.css';
import './contacts.css';
import Part1 from "./contactComponents/part1";
import Part2 from "./contactComponents/part2";
import Part3 from "./contactComponents/part3";

const Contacts = () =>{
    return (
        <div className="row contacts">
            <Part1/>
            <Part2/>
            <Part3/>
        </div>
    );
}

export default Contacts;