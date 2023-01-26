import React from 'react'
import img111 from "../images/imagesec.png"
import { SiLinkedin } from "react-icons/si";
import { GrMail } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";
const Conta2 = (props)=>{
    console.log(props.info);
return(
<div className='idhar2'>
<div className='main_chair2' >
<div className='main_image2'>
<img src={"http://localhost:1337"+props.info.Image.url}/>
</div>
<div className='flexing2'><div className='heading2'>{props.info.Position_Name}</div>
<div className='para2'>
    {props.info.Name} <br/>{props.info.Department}<br/><br/>"{props.info.Slogan}"<br/><br/>
   <div className='icons2'>
    <div className='ico2'><IoMdCall size={50}/>{props.info.Phone_Num}</div>
    <a href={"mailto:"+props.info.Mail_ID} className='ico2'><GrMail size={50}/></a>
    <a href={props.info.Linkedin_ID}className='ico2'><SiLinkedin size={50}/></a>
   
    </div> 
</div>


</div>







</div>
</div>

)



}
export default Conta2;

