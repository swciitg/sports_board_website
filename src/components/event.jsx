import React from "react";
import img1 from '../images/image 8.png';
import Image from "./image";
import "./hover.css";
// 1280 px pe image ki position change karna fir ,, 1167px pe font ka size image ka position ,,
function Event(){
return(
<div id="curve" className=" space-y-48 absolute left-48  " >
{/* <div className="container1" > */}
     <div id="cont" className=" font-extrabold pl-0 flex flex-row space-x-24 mt-40 ">
     <div id="first" className="flex flex-col ">
     <div className='flex flex-col  ' >
     <div id="counter" class="animated">
               <ul id="digit" class="digits digits-third luckie"> <li> 0</li> <li> 0</li> </ul>
               <ul id="digit" class="digits digits-third luckie"> <li> 1 </li><li> 1</li> </ul>
           </div>
    <h1 id="font" className="text-8xl absolute left-52">SPARDHA</h1>
     </div>
     <div className="lines absolute top-36"></div>
     </div>
     {/* <div className="container">
        <img className="one" src={img1}></img>
   
     </div> */}
     <div className="one" >
      <Image></Image>
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
    <div className="lines absolute top-44 "></div>
    </div>
    {/* <div>
        <img className="two" src={img1}></img>
     </div> */}
     <div className="two">
      <Image></Image>
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
    <div className="lines absolute top-52"></div>
    </div>
    {/* <div>
        <img className="three" src={img1}></img>
     </div> */}
     <div className="three">
      <Image></Image>
     </div>
    </div>
    <div id="cont" className=" font-extrabold flex flex-row space-x-24">
    <div id="fourth"  >
    <div>
    <div id="counter3" class="animated">
               
               <ul id="digit" class="digit3 digit3-third luckie"> <li> 0 </li><li> 0</li></ul>
               <ul id="digit" class="digit3 digit3-third luckie"> <li> 4</li>  <li> 4</li></ul>
           </div>
    <h1 id="font3" className="text-8xl  ">MANTHAN</h1>
    </div>
    <div className="lines absolute top-60 "></div>
    </div>
    {/* <div>
        <img className="four" src={img1}></img>
     </div> */}
     <div className="four">
      <Image></Image>
     </div>
    </div>
   
</div>







);
}
export default Event;