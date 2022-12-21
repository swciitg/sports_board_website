import img1 from "../images/about_icon.png";
import React , { useRef }from "react";

const About_us = ()=>{
    const refoverall = useRef();
    const handle=(e)=>{
        window.addEventListener('scroll',()=>{
          console.log(refoverall.current.style)
          console.log(refoverall.current.style.backgroundSize)
          let v=100+(window.pageYOffset)/20;
          refoverall.current.style.backgroundSize= v + '%'+ " "+v+'%';
        })
      }
    return(
        <>
        <div className="about_block" ref={refoverall} onMouseEnter={handle} >
            <div className="container1">
                <div >
                    <img src={img1} className="img1" alt="" />
                </div>
            </div>
            <div className="container2">
            <div className="head_about lg:text-6xl max-sm:text-3xl" style={{lineHeight:'123%'}}>About US</div>
            <p className="para_about lg:text-2xl pt-5" style={{lineHeight:'160%'}}>
            You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.
            All outdoor sports like athletics, swimming, cricket, football, hockey, basketball, volleyball, etc. and indoor sports like table tennis, weight lifting, chess, carrom, squash, etc. are actively played by all throughout the year.
            </p>
            </div>   
        </div>
        <div className="smabout_block">
            <div className="head_about">About US</div>
            <div >
                    <img src={img1} className="smimg1" alt="" />
            </div>
            <div>
                <p className="para_about">
                You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.
                All outdoor sports like athletics, swimming, cricket, football, hockey, basketball, volleyball, etc. and indoor sports like table tennis, weight lifting, chess, carrom, squash, etc. are actively played by all throughout the year.
                </p>
            </div>
        </div>
        </>
    )
}

export default About_us;