import img1 from "../images/about_icon.png";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Achievements from "./achievements";
const PastEvents = () => {

    return ( 
        <>
        <div className="events_overall">
            <div>
                <div className="pasteventsContainer1">
                <div className="flex flex-col">
                    <div className="head_about text-6xl max-sm:text-3xl" style={{lineHeight:'123%'}}>Past Events</div>
                        <p className="para_about sm:text-2xl pt-5" style={{lineHeight:'160%'}}>
                        <ul className="para_about " style={{listStyle: "inside"}}>
                        <li>Inter IIT: The primary goal of every sports club of the IIT (annual event).</li>
                        <li>Basketball Spardha: Inter hostel competition (annual event)</li>
                        <li>Basketball Spirit: Inter college competition (annual event)</li>
                        <li>Friendly Matches : Held at regular intervals against the local clubs.</li>
                        </ul> 
                        </p>
                    </div>
                    <div style={{display:'contents'}}>
                        <img src={img1} className="gridimg" alt="" />
                    </div>
                </div>
                
            </div>
        </div>
        <Achievements />
        </>
     );
}
 
export default PastEvents;