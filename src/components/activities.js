import img1 from "../images/about_icon.png";
import React , { useRef }from "react";
const Activities = () => {
    return ( 
        <div>
        <div className="crng_block">
            <div className="flex flex-col pr-6 pl-10">
            <div className="head_about">Activities</div>
                <p className="para_about">
                You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.
                All outdoor sports like athletics, swimming, cricket, 
                You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.
                All outdoor sports like athletics, swimming, cricket, 
                </p>
            </div>
            <div>
                <img src={img1} className="img1" alt="" />
            </div>
        </div>
    </div> 
     );
}
 
export default Activities;