import img1 from "../images/about_icon.png";
import React , { useRef }from "react";
const ClubRnG = () => {
    return ( 
        <>
        <div className="cnrg_overall">
            <div className="crng_block">
                <div className="flex flex-col pr-6 w-[90%]">
                <div className="head_about" style={{fontSize: '500%'}}>Rules and guidelines</div>
                    <p className="para_about" style={{lineHeight:'160%'}} >
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
            <div className="smcnrg_overall">
                <div className="smcnrg_block">
                <div className="head_about text-6xl max-sm:text-3xl">Rules and guidelines</div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <img src={img1} className="gridimg" alt="" />
                    </div>
                    <div className="flex flex-col pr-6">
                        <p className="para_about">
                        You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.
                        All outdoor sports like athletics, swimming, cricket, 
                        You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.
                        All outdoor sports like athletics, swimming, cricket, 
                        </p>
                    </div>
                </div>
            </div>    
            </>
    );
}
 
export default ClubRnG;