// props use karna padega
import React from "react";
import img1 from '../images/image 8.png';

function Image(props)
{
    
    return(
     
        <div className="container">
        <img src={"http://localhost:1337"+ props.image_url} />
         <div className="top-left text-white">SPARDHA</div>  
        <div className=" absolute right-3 bottom-1 text-8xl text-white ">01</div>
        </div>


    );
}
export default Image;