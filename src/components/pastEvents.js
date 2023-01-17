import img1 from "../images/about_icon.png";
import { useEffect, useRef } from "react";
import { useState } from "react";
const PastEvents = () => {
    const [sc,setsc]=useState('hidden');

    const ref=useRef();
    const handle=(e)=>{
        console.log(ref);
        console.log(e.target.offsetTop);
        if(e.target.offsetTop<2450){
            setsc('hidden');
        }
        else{
            setsc('scroll');
        }
    }

    
    return ( 
        <div className="events_overall" onScroll={handle} ref={ref} style={{overflowY:{sc}}}>
            <div className="grid grid-rows-2 gap-y-32" style={{paddingTop: '40%',
  paddingBottom: '10%',
  scrollSnapType: 'y mandatory'}}>
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
                    <div>
                        <img src={img1} className="img1" alt="" />
                    </div>
                </div>
                <div className="pasteventsContainer2">
                    <div className="flex flex-row-reverse">
                        <img src={img1} className="img1" alt="" />
                    </div>
                    <div className="flex flex-col max-pd ">
                    <div className="head_about text-6xl max-sm:text-3xl" style={{lineHeight:'123%'}}>Acheivements.</div>
                        <p className="para_about sm:text-2xl pt-5" style={{lineHeight:'160%'}}>
                            <ul className="para_about" style={{listStyle: "inside"}}>
                                <li>Inter IIT: The primary goal of every sports club of the IIT (annual event).</li>
                                <li>Basketball Spardha: Inter hostel competition (annual event)</li>
                                <li>Basketball Spirit: Inter college competition (annual event)</li>
                                <li>Friendly Matches : Held at regular intervals against the local clubs.</li>
                            </ul> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PastEvents;