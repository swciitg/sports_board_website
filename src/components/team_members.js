import img1 from "../images/about_icon.png";
import React , { useRef }from "react";
import Cursor from "./cursor";
const Team_members = ()=>{
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
      ref.current.scrollLeft = scrollLeft-walk; 
    }
   
    return(
        <>
         <Cursor />
        <div className="team_blockoverall">
        <div className="team_block"  onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} >
          <div className="containerteam1">
            <div className="containerteam2">
             <div className="head_about">TEAM MEMBERS</div>
             <p className="para_about">
             You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.
             </p>
             <div className="firm-btn">
                <a href="/#" className="btn" style={{textDecoration:"none"}}> Know More </a>
              </div>
            </div>
          </div>
            <div ref={ref} className="flex overflow-x-hidden cursor-grab">
            <div className="gridcontainer cursor-grab">
              <div className="imggrid">
              <img src={img1} className="gridimg" alt=""/>
              <img src={img1} className="gridimg" alt=""/>
              <img src={img1} className="gridimg" alt=""/>
              <img src={img1} className="gridimg" alt=""/>
              <img src={img1} className="gridimg" alt=""/>
              <img src={img1} className="gridimg" alt=""/>
              <img src={img1} className="gridimg" alt=""/>
              <img src={img1} className="gridimg" alt=""/>  
              </div>
              <div className="imggrid">
              <img src={img1} className="gridimg" alt=""/>
              <img src={img1} className="gridimg" alt=""/>
              <img src={img1} className="gridimg" alt=""/>
              <img src={img1} className="gridimg" alt=""/>
              <img src={img1} className="gridimg" alt=""/>
              <img src={img1} className="gridimg" alt=""/>
              <img src={img1} className="gridimg" alt=""/>
              <img src={img1} className="gridimg" alt=""/>  
              </div>
            </div>
           </div>
          </div>
        </div>
        <div className="smoverallcontainer_team">
        <div className="smteam_block" >
          <div className="head_about max-sm:text-6xl">TEAM MEMBERS</div>
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
                    <a href="/#" class="btn" style={{textDecoration:"none"}}> Know More </a>
              </div>
        </div>
      </div>
        </>
    )

}
export default Team_members;