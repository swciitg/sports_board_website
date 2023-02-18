// props use karna padega
import React from "react";
import BACKEND_URL from "../constants";
import img1 from '../images/image 8.png';

function Image(props)
{
    
    return(
     
        <div className="container w-80 h-80">
        <img src={BACKEND_URL+ props.image_url} />
         <div className="top-left text-white">{props.name}</div>  
        <div className=" absolute right-3 bottom-1 text-8xl text-white ">01</div>
        </div>


    );
}
export default Image;