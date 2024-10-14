import React from "react";
import img1 from '../images/image 8.png';
import Image from "./image";
import "./hover.css";
import { useState,useEffect } from "react";
import BACKEND_URL from "../constants";
import Loader from "./Loader";
// 1280 px pe image ki position change karna fir ,, 1167px pe font ka size image ka position ,,
function Event(){
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
    isLoaded ? (<div className="overall_evemain">
    <div id="curve" className=" space-y-48 relative left-4em  " >
    {/* <div className="container1" > */}
         <div id="cont" className=" font-extrabold pl-0 flex flex-row space-x-24 mt-40 ">
         <div id="first" className="flex flex-col ">
         <div className='flex flex-col   ' >
         <div id="counter" class="animated">
                   <ul id="digit" class="digits digits-third luckie"> <li> 0</li> <li> 0</li> </ul>
                   <ul id="digit" class="digits digits-third luckie"> <li> 1 </li><li> 1</li> </ul>
               </div>
        <h1 id="font" className="text-8xl absolute left-52">SPARDHA</h1>
         </div>
        <div id="line"> <div className="lines absolute top-1"></div></div>
         </div>
         {/* <div className="container">
            <img className="one" src={img1}></img>
       
         </div> */}
         <div className="one" >
          <Image name={data[0].Event_Name} image_url = {BACKEND_URL+data[0].Thumbnail_Image.url}></Image>
         </div>
        {/* </div> */}
        </div>
        <div id="cont" className=" font-extrabold flex flex-row space-x-24" >
          <div id="second" className="flex flex-col ">
          <div>
          <div id="counter1" class="animated absolute left-52">
                   
                   <ul id="digit" class="digit digit-third luckie"> <li> 0</li> <li> 0</li></ul>
                   <ul id="digit" class="digit digit-third luckie"> <li> 2</li> <li> 2</li></ul>
               </div>
        <h1 id="font1" className="text-8xl ">INTER IIT</h1>
        </div>
        <div id="line1" className="lines absolute top-0 "></div>
        </div>
        {/* <div>
            <img className="two" src={img1}></img>
         </div> */}
         <div className="two">
          <Image  name={data[1].Event_Name} image_url = {BACKEND_URL+data[1].Thumbnail_Image.url}></Image>
         </div>
        
        </div>
        <div id="cont" className=" font-extrabold flex flex-row space-x-24">
        <div id="third" className="flex flex-col">
        <div>
        <div id="counter2" class="animated">
                   
                   <ul id="digit" class="digit2 digit2-third luckie"> <li> 0</li> <li> 0</li></ul>
                   <ul id="digit" class="digit2 digit2-third luckie"> <li> 3</li> <li> 3</li></ul>
               </div>
        <h1 id="font2" className="text-8xl  ">SPIRIT</h1>
        </div>
        <div id="line2" className="lines absolute top-0"></div>
        </div>
        {/* <div>
            <img className="three" src={img1}></img>
         </div> */}
         <div className="three">
          <Image  name={data[2].Event_Name}    image_url = {BACKEND_URL+data[2].Thumbnail_Image.url}></Image>
         </div>
        </div>
    </div>
    </div>) : (<Loader/>)





);
}
export default Event;