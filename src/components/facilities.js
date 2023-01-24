import img1 from "../images/about_icon.png";
import React , { useRef }from "react";
import Cursor from "./cursor";
import { NavLink } from "react-router-dom";
import Marquee from "react-marquee-slider";
import times from "lodash/times"
const Facilities = (props)=>{
  let isDown = false;
    let startX;
    let scrollLeft;
    const ref = useRef();
    const handleMouseDown = (e)=>{ isDown = true; startX=(e.pageX)-ref.current.offsetLeft;scrollLeft = ref.current.scrollLeft;}
    const handleMouseLeave = ()=>{ isDown = false;}
    const handleMouseUp = ()=>{ isDown = false;}
    const handleMouseMove = (e)=>{
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - ref.current.offsetLeft;
      const walk = x -startX;
      /*console.log({x,startX});
      console.log(ref);*/
      ref.current.scrollLeft = scrollLeft-walk; }

    return(
      <>
      <Cursor />
    <div className="facilities_blockoverall">
      <div className="facilities_block " onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
          <div className="containerteam1">
            <div className="containerteam2">
             <div className="head_about">{props.name}</div>
             <p className="para_about">
             {props.desc}
            </p>
             <div className="our-firm-btn">
                    <a href="#" className="btn" style={{textDecoration:"none"}}><span>Know More </span></a>
                </div>
            </div>
          </div>
        <div ref={ref} className="flex overflow-x-hidden "> 
          <div className="gridcontainer cursor-grab">
                {<div className="imggrid">
                  {props.media.map((image,index)=>{
                     return index%2==0 ?<img src={"http://localhost:1337"+image.url} className="gridimg" alt=""/>:<></>
                })}
              </div>}
              {<div className="imggrid">
                  {props.media.map((image,index)=>{
                     return index%2!==0?<img src={"http://localhost:1337"+image.url} className="gridimg" alt=""/>:<></>
                })}
              </div>}
            </div>
          </div> 
      </div>
    </div>
      <div className="smoverallConatiner_facilities">
        <div className="smfacilities_block">
            <div className="head_about max-sm:text-6xl">OUR FACILITIES</div>
            <div>
              <p className="para_about">
              You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.
              </p>
            </div>
          <div className="smgrid flex flex-row overflow-x-scroll">
            <img src={img1} className="gridimg" alt=""/>
            <img src={img1} className="gridimg" alt=""/>
            <img src={img1} className="gridimg" alt=""/>
            <img src={img1} className="gridimg" alt=""/>
          </div>
          </div>
          <div>
             <div className="smfirm-btn">
                    <a href="/#" className="btn" style={{textDecoration:"none"}}> Know More </a>
              </div>
          </div>
      </div>
        </>
    )

}
export default Facilities;