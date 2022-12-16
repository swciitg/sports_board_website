import React from "react";
import img1 from '../images/footer.png';
import img2 from '../images/icona.png';
import img3 from '../images/iconb.png';
import img4 from '../images/iconc.png';
import img5 from '../images/icond.png';
import img6 from '../images/icone.png';
import img7 from '../images/smallicon.png';
function Footer()
{
return(

<div id="container"  className="  flex flex-row gap-64 w-fit h-76 mt-6 pl-12 px-10 " >
<div className="flex flex-row ml-12 ">
  <div className="image w-52 h-52"><img className=" h-52 w-52 " src={img1}alt=""/></div>
  <div className="content flex flex-col flex-wrap items-start justify-start   ">
    <div className="details flex flex-col flex-wrap items-start justify-start gap-1  p-1 m-1 ">
      <div className=" flex flex-col flex-wrap items-start justify-start"  >  <h1  id="head" className=" text-2xl mt-2 font-extrabold ">STUDENTS GYMKHANA</h1>
         <h1 id="head" className="text-2xl ml-0 font-extrabold ">COUNCIL</h1></div> 
        <p align="left" id="one" className="  text-sm ">New SAC Building IIT Guwahati,<br/> Guwahati, Assam - 781039</p>
        <p align="left" id="one" className="text-sm">+91 -361-258162<br/>sgc@iitg.ac.in</p>
    </div>
     <div className="flex flex-row p-3 ml-4 mt-0 relative right-6 ">
        <img className="h-8 w-8" src={img2} alt=""/>
        <img  className="h-8 w-8" src={img3} alt=""/>
        <img  className="h-8 w-8" src={img4} alt=""/>
        <img  className="h-8 w-8"  src={img5} alt=""/>
     </div>
    </div>
    </div>
      <div className=" flex flex-col mt-14  gap-2">
        <div className="flex flex-row gap-2 ">
            <img className="h-16 w-16" src={img6} alt=""></img>
        <p align="left" id="one" className="text-sm content-start ">Maintained by Students<br/>Web committee<br/>IIT Guwahati</p>
        </div>
        <div className="element2 flex flex-row">
             <img src={img7} />
            <p id="one" className="text-sm">Students Gymkhana council, IIT Guwahati</p>
        </div>
      </div>
  </div>
 

);
}
export default Footer;