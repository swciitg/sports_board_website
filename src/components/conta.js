import React from 'react'
import img11 from "../images/chairman.png"
import { SiLinkedin } from "react-icons/si";
import { GrMail } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
const Conta = (props)=>{

return(
<div className='idhar'>
<div className='main_chair' >
<div className='main_image'>
<img src={"http://localhost:1337"+props.info.Image.url} alt=""/>
</div>
<div className='flexing'><div className='heading'><p style={{margin:"10px"}}>{props.info.Position_Name}</p></div>
<div className='para'>
        {props.info.Name} <br/>{props.info.Department}<br/><br/>"{props.info.Slogan}"<br/><br/>
   <div className='icons'>
   <a href={"tel:"+props.info.Phone_Num} className='ico2'><IoMdCall size={50}/></a>
    <a href={"mailto:"+props.info.Mail_ID} className='ico2'><GrMail size={50}/></a>
    <a href={props.info.Linkedin_ID}className='ico2'><SiLinkedin size={50}/></a>
   
    </div> 
</div>


</div>







</div>
</div>

)



}
export default Conta;

