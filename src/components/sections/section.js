import './section.css';
import React from 'react' ;
import '../../myDefault.css';
import Section1 from './individualSections/section1';
import Section2 from './individualSections/section2';
import first from "../../images/Untitled.png";
import second from "../../images/Untitled (1).png";
import third from "../../images/Group 6.png";

const Section = (props) => {
    return (
        <div className='row sections'>
            <div className='section1 row'>
                <Section1 col="col-6"  col2="col-5" imgsrc={first}/>
             </div>
            <div className='section2 row'>
                <Section2 section2h1="Find Out a Little More" section2hh1="About Us" section2p="We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery." col="col-6 order2"  col2="col-6 order1" imgsrc={second}/>
            </div> 
            <div className='section2 row'>
            <Section2 section2h1="Your Safety Is" section2hh1="Important" section2p="When your order reaches you, we have the health safety protocols, so that you are protected from any disease. Watch the video of how the delivery is made." col="col-6" col2="col-5" imgsrc={third}/>
            </div> 

        </div>
    );
}

export default Section;