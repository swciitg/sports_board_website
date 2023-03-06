import img1 from "../images/about_icon.png";
import React , { useRef,useState,useEffect }from "react";
import Cursor from "./cursor";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Marquee from "react-marquee-slider";
import times from "lodash/times"
import BACKEND_URL from "../constants";
const Facilities = (props)=>{
  let isDown = false;
    let startX;
    let scrollLeft;
    const ref = useRef();
    const ref1 = useRef();
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
      const {pathname}=useLocation();
    useEffect(()=>{
      if(pathname==="/"||pathname==="/stud/gymkhana/sports"){
        ref1.current.style.display='relative';
      }
      else{
        ref1.current.style.display='none';
      }
    })
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
                    <a href="/contacts" className="btn" style={{textDecoration:"none"}} ref={ref1}><span>Know More </span></a>
                </div>
            </div>
          </div>
        <div ref={ref} className="flex overflow-x-hidden "> 
          <div className="gridcontainer cursor-grab">
                {<div className="imggrid">
                <Marquee>
                  {props.media.map((image,index)=>{
                     return index%2==0 ?<img src={BACKEND_URL+image.url} className="gridimg" alt=""/>:<></>
                })}
                </Marquee>
              </div>}
              {<div className="imggrid">
              <Marquee>
                  {props.media.map((image,index)=>{
                     return index%2!==0?<img src={BACKEND_URL+image.url} className="gridimg" alt=""/>:<></>
                })}
                </Marquee>
              </div>}
            </div>
          </div> 
      </div>
    </div>
      <div className="smoverallConatiner_facilities">
        <div className="smfacilities_block">
            <div className="head_about max-sm:text-6xl">{props.name}</div>
            <div>
              <p className="para_about">
              {props.desc}
              </p>
            </div>
          <div className="smgrid flex flex-row overflow-x-scroll">
                {props.media.map((image,index)=>{
                     return <img src={BACKEND_URL+image.url} className="gridimg" alt=""/>
                })}
          </div>
          </div>
          <div>
             <div className="smfirm-btn">
                <a href="/contacts" className="btn" style={{textDecoration:"none"}} ref={ref1}><span>Know More </span></a>
            </div>
          </div>
      </div>
        </>
    )

}
export default Facilities;