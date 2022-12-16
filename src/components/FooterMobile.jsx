import React from "react";
import img1 from './images/footer.png';
import img2 from './images/icona.png';
import img3 from './images/iconb.png';
import img4 from './images/iconc.png';
import img5 from './images/icond.png';
import img6 from './images/icone.png';
import img7 from './images/smallicon.png';

function FooterMobile()
{
   return(
   <div className="container flex flex-col gap-x-2" >
   <div className="flex flex-col">
     <div className="flex flex-row" >
     <div id="image1" className="image w-52 h-52"><img className=" h-28 w-28 " src={img1}alt=""/></div>
     <div className="content text-3xl "><p align="left">STUDENTS<br/>GYMKHANA<br/>COUNCIL</p></div>
     </div>
     <div className="flex flex-row p-3 ml-4 mt-0 relative right-6 ">
        <img className="h-12 w-12" src={img2} alt=""/>
        <img  className="h-12 w-12" src={img3} alt=""/>
        <img  className="h-12 w-12" src={img4} alt=""/>
        <img  className="h-12 w-12"  src={img5} alt=""/>
     </div>
     </div>
     <div className="flex flex-row">
     <div className="flex flex-col gap-2">
     <div className="content">
       <p align="left" className="text-sm ">New SAC Building IIT<br/>Guwahati, Guwahati,<br/>Assam-781039</p>
     </div>
     <div className="content1">
        <p align="left">+91-361-258162<br/>sgciitg@gmail.com</p>
     </div>
     </div>
     <div className="flex  flex-col">
    <div className="flex flex-row">
     <img src={img6}></img>
     <p className="text-sm" align="left">Maintained by<br/> Students Web<br/> Committee, IITG</p>
    </div>
    <div>
        <p className="text-sm">Students Gymkhana<br/> Council, IIT Guwahati</p>
    </div>
    </div>
     </div>
   </div>

   ); 
}
