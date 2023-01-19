import React from "react";
import img1 from '../images/image 8.png';
import Image from "./image";
import "./event1.css"
function Eventone()
{
    return(
        <div className="overall_evemain ">
          <div className="main-curve  flex flex-col gap-1 "  >
              <div id="part1" className="flex flex-col " >
              
              <div id="counter" class="animated">
               <ul id="digit" class="digits digits-third luckie"> <li> 0</li> <li> 0</li> </ul>
               <ul id="digit" class="digits digits-third luckie"> <li> 1 </li><li> 1</li> </ul>
              </div>
              <div className="font1"> SPARDHA</div>
               <div id="line1" className="lines "></div>
               <div className="one"><Image></Image></div>
              </div>
              <div id="part2" className="flex flex-col " >
              
              <div id="counter1" class="animated">
               <ul id="digit" class="digit1 digit1-third luckie"> <li> 0</li> <li> 0</li> </ul>
               <ul id="digit" class="digit1 digit1-third luckie"> <li> 1 </li><li> 1</li> </ul>
              </div>
              <div className="font1"> INTER-IIT</div>
               <div id="line2" className="lines "></div>
               <div className="two"><Image></Image></div>
              </div>
              <div id="part3" className="flex flex-col " >
              
              <div id="counter2" class="animated">
               <ul id="digit" class="digit2 digit2-third luckie"> <li> 0</li> <li> 0</li> </ul>
               <ul id="digit" class="digit2 digit2-third luckie"> <li> 1 </li><li> 1</li> </ul>
              </div>
              <div className="font1"> SPIRIT</div>
               <div id="line2" className="lines "></div>
               <div className="three"><Image></Image></div>
              </div>
              <div id="part4" className="flex flex-col " >
              
              <div id="counter3" class="animated">
               <ul id="digit" class="digit3 digit3-third luckie"> <li> 0</li> <li> 0</li> </ul>
               <ul id="digit" class="digit3 digit3-third luckie"> <li> 1 </li><li> 1</li> </ul>
              </div>
              <div className="font1"> MANTHAN</div>
               <div id="line4" className="lines "></div>
               <div className="four"><Image></Image></div>
              </div>
              
              {/* <div className="part2">
              <div id="counter1" class="animated">
               <ul id="digit" class="digit1 digit1-third luckie"> <li> 0</li> <li> 0</li> </ul>
               <ul id="digit" class="digit1 digit1-third luckie"> <li> 2 </li><li> 2</li> </ul>
              </div>
              <div className="font1">INTER-IIT</div>
               <div  id="line1" className="lines "></div>
               <div className="two"><Image></Image></div>
              </div> */}
              {/* <div className="part3">
              <div id="counter2" class="animated">
               <ul id="digit" class="digit2 digit2-third luckie"> <li> 0</li> <li> 0</li> </ul>
               <ul id="digit" class="digit2 digit2-third luckie"> <li> 3 </li><li> 3</li> </ul>
              </div>
              <div className="font1">SPIRIT</div>
               <div id="line1" className="lines "></div>
               <div className="three"><Image></Image></div>
              </div> */}
              {/* <div className="part4">
              <div id="counter3" class="animated">
               <ul id="digit" class="digit3 digit3-third luckie"> <li> 0</li> <li> 0</li> </ul>
               <ul id="digit" class="digit3 digit3-third luckie"> <li> 4 </li><li> 4</li> </ul>
              </div>
              <div className="font1">MANTHAN</div>
               <div id="line1" className="lines "></div>
               <div className="four"><Image></Image></div>
              </div> */}
          </div>
        </div>
    );
}
export default Eventone;