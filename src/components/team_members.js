import img1 from "../images/about_icon.png";
import React , { useRef,useState,useEffect }from "react";
import { useLocation } from "react-router-dom";
import Cursor from "./cursor";
const Team_members = (props)=>{
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
      ref.current.scrollLeft = scrollLeft-walk; 
    }
    const {pathname}=useLocation();
    useEffect(()=>{
      if(pathname==="/stud/gymkhana/sports/"||pathname==="/stud/gymkhana/sports"){
        ref1.current.style.display='relative';
      }
      else{
        ref1.current.style.display='none';
      }
    })
    return(
        <>
         <Cursor />
        <div className="team_blockoverall">
        <div className="team_block"  onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} >
          <div className="containerteam1">
            <div className="containerteam2">
             <div className="head_about">{props.name}</div>
             <p className="para_about">
             {props.desc}
             </p>
             <div className="firm-btn" ref={ref1}>
                <a href="/stud/gymkhana/sports/clubs" className="btn" style={{textDecoration:"none"}}> Know More </a>
              </div>
            </div>
          </div>
            <div ref={ref} className="flex overflow-x-hidden cursor-grab">
            <div className="gridcontainer cursor-grab">
              {<div className="imggrid">
                  {props.media.map((image,index)=>{
                     return index%2==0 ?<img src={"http://localhost:1337"+image.url} className="gridimg" alt=""/>:<></>
                })}
              </div>}
              <div className="imggrid">
              {props.media.map((image,index) =>{
                    return index%2 ?<img src={"http://localhost:1337"+image.url} className="gridimg" alt=""/>:<></>
                })}
              </div>
            </div>
           </div>
          </div>
        </div>
        <div className="smoverallcontainer_team">
        <div className="smteam_block" >
          <div className="head_about max-sm:text-6xl">{props.name}</div>
          <div>
          <p className="para_about">
              {props.desc}
             </p>
          </div>
          <div className="smgrid flex flex-row overflow-x-scroll">
              {props.media.map((image,index)=>{
                     return <img src={"http://localhost:1337"+image.url} className="gridimg" alt=""/>
                })}
          </div>
        </div>
        <div>
              <div className="smfirm-btn" ref={ref1}>
                  <a href="/stud/gymkhana/sports/clubs" className="btn" style={{textDecoration:"none"}}> Know More </a>
              </div>
        </div>
      </div>
        </>
    )

}
export default Team_members;