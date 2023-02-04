import React from "react";
import '../../myDefault.css';
import './footer.css';
import Lists from "./lists/lists";

const Footer = () =>{
    
    return (
        <div className="footer row">
            <ul className="list1 col-4">
                <Lists text="Order Products Faster
Easier"><h2 className="listHeader">Delivery</h2></Lists>
            </ul>
            <ul className="list1 col-4">
            <Lists text="Pricing"><h2 className="listHeader">Our Services</h2></Lists>
            <Lists text="Discounts"></Lists>
            <Lists text="Report a bug"></Lists>
            <Lists text="Terms of Service"></Lists>
            </ul>
            <ul className="list1 col-4">
            <Lists text="Blog"><h2 className="listHeader">Our Company</h2></Lists>
            <Lists text="Our mission"></Lists>
            <Lists text="Get in touch"></Lists>
            </ul>
            <div className="copyright row">
                <p className="col-12">Luanda Nuredini. All right reserved</p>
            </div>
        </div>
    );
}

export default Footer;