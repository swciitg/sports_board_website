// props use karna padega
import React from "react";
import BACKEND_URL from "../constants";
import img1 from '../images/image 8.png';

function Image(props)
{
    
    return(
     
        <div className="container w-80 h-80">
        <img  src={img1} />
         <div className="top-left text-white">{props.name}</div>  
        </div>
//   src={BACKEND_URL+ props.image_url}

    );
}
export default Image;