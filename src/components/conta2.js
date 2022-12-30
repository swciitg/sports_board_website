import React from 'react'
import img111 from "../images/imagesec.png"
import { SiLinkedin } from "react-icons/si";
import { GrMail } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
const Conta2 = ()=>{

return(
<div className='idhar2'>
<div className='main_chair2' >
<div className='main_image2'>
<img src={img111}alt=""/>
</div>
<div className='flexing2'><div className='heading2'>CHAIRMAN</div>
<div className='para2'>
    Professor Deepak Sharma <br/>Department of Mechanical Engineering <br/><br/>"Lorem Lpsum"<br/><br/>
   <div className='icons2'>
    <div className='ico2'><IoMdCall size={50}/></div>
    <div className='ico2'><GrMail size={50}/></div>
    <div className='ico2'><SiLinkedin size={50}/></div>
   
    </div> 
</div>


</div>







</div>
</div>

)



}
export default Conta2;

