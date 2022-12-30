import React from 'react'
import img11 from "../images/chairman.png"
import { SiLinkedin } from "react-icons/si";
import { GrMail } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
const Conta3 = ()=>{

return(
<div className='idhar3'>
<div className='main_chair3' >
<div className='main_image3'>
<img src={img11} alt=""/>
</div>
<div className='flexing3'><div className='heading3'>CHAIRMAN</div>
<div className='para3'>
    Professor Deepak Sharma <br/>Department of Mechanical Engineering <br/><br/>"Lorem Lpsum"<br/><br/>
   <div className='icons'>
    <div className='ico'><IoMdCall size={50}/></div>
    <div className='ico'><GrMail size={50}/></div>
    <div className='ico'><SiLinkedin size={50}/></div>
   
    </div> 
</div>


</div>







</div>
</div>

)



}
export default Conta3;

