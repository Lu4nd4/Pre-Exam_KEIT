import './navbar.css';
import React, { createElement } from 'react';
import List from './list/list';
import '../../myDefault.css';

const Navbar = () =>{
    const logo = 'Delivery';
    let arr= ["Home", "About us", "Services", "Contact us"];

    
    return (
        <div className='navbar row'>
            <div className='navlogo col-4'>
                <h1 className='logo'>{logo}</h1>
            </div>
            <div className='nav col-6'>
                <ul className='row navul '>
                    <List text = {arr[0]} cols= "col-3"/>
                    <List text = {arr[1]} cols= "col-3"/>
                    <List text = {arr[2]} cols= "col-3"/>
                    <List text = {arr[3]} cols= "col-3"/>
                </ul>
            </div>
            <div className='col-2'>
                <button className='navbtn'>Order Now!</button>
            </div>
        </div>
    );
}

export default Navbar;


