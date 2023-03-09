import React from "react";
import img1 from '../images/image 8.png';
import Image from "./image";
import "./New.css";
import { useState,useEffect } from "react";
import BACKEND_URL from "../constants";
import Loader from "./Loader";
function New()
{
    const [ data, setData]=useState(
        [] );
          
          async function getData (){
               try{
              const api = `${BACKEND_URL}/api/alleventdata`;
              const result =await fetch(api);
              const getResult = await result.json();
              setLoad(true);
              setData(getResult);
               }
               catch
               {
        
               }
            }
            useEffect(()=>{
              getData();
          },[])
          const [isLoaded,setLoad] = useState(false);
    return(
       isLoaded? (<div className="new-block">
            
       <div className="eve-div">
       <div className="another">
       <div className="event">
       <div id="eve-counter" class="animated">
              <ul id="digit" class="digits digits-third luckie"> <li> 0</li> <li> 0</li> </ul>
              <ul id="digit" class="digits digits-third luckie"> <li> 1 </li><li> 1</li> </ul>
          </div>
       <div><h1 className="eve-name">SPARDHA</h1></div> 
         </div>
         </div>
     <div className="test">   <div className="new-line"><hr/></div><div className="img-one"><img src={img1}/></div> </div> 
       </div>
       <div className="eve-div" >
       <div className="event">
       <div id="eve-counter" class="animated">
              <ul id="digit" class="digits digits-third luckie"> <li> 0</li> <li> 0</li> </ul>
              <ul id="digit" class="digits digits-third luckie"> <li> 2 </li><li> 2</li> </ul>
          </div>
         <div  ><h1 className="eve-name">SPIRIT</h1></div>
         </div>
         <div  className="new-line"><hr/></div>
       </div>

       <div className="eve-div" >
       <div className="event">
       <div id="eve-counter" class="animated">
              <ul id="digit" class="digits digits-third luckie"> <li> 0</li> <li> 0</li> </ul>
              <ul id="digit" class="digits digits-third luckie"> <li> 3 </li><li> 3</li> </ul>
          </div>
         <div  ><h1 className="eve-name">INTER-IIT</h1></div>
         </div>
         <div  className="new-line"><hr/></div>
       </div>
   </div>):(<Loader/>)   
       
    );
}

export default New;