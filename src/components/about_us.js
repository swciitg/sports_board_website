import img1 from "../images/about_icon.png";
import React from "react";
import { useEffect } from "react";



const About_us = (props)=>{

    return(
        <div className="overall_about">
        <div className="about_block">
            <div className="container1">
                <div>
                    <img src={img1} className="img1" alt="" />
                </div>
            </div>
            <div className="container2">
            <div className="head_about max-sm:text-3xl" style={{lineHeight:'123%'}}>{props.name}</div>
            <p className="para_about " style={{lineHeight:'160%'}}>
                {props.desc}
            </p>
            </div>   
        </div>
        <div className="smabout_block">
            <div className="head_about text-6xl max-sm:text-3xl">About US</div>
            <div style={{display:'flex',justifyContent:'center'}}>
                    <img src={img1} className="gridimg" alt="" />
            </div>
            <div>
                <p className="para_about">
                You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.
                All outdoor sports like athletics, swimming, cricket, football, hockey, basketball, volleyball, etc. and indoor sports like table tennis, weight lifting, chess, carrom, squash, etc. are actively played by all throughout the year.
                </p>
            </div>
        </div>
        </div>
    )
}


export default About_us;