import React from "react";
import img1 from '../images/logo_sportsboard.jpg';
import img2 from '../images/icona.png';
import img3 from '../images/iconb.png';
import img4 from '../images/iconc.png';
import img5 from '../images/icond.png';
import img6 from '../images/swc_logo.png';
import img7 from '../images/smallicon.png';
import img8 from "../images/linkedin.png";
import { useState,useEffect } from "react";
import "./footer.css"
function Footer()
{
  const [ data, setData]=useState({"id":1,"HomePage_Heading":"Loading","HomePage_Slogan":"loading","createdAt":"2023-01-22T18:44:58.917Z","updatedAt":"2023-01-22T18:46:54.160Z","publishedAt":"2023-01-22T18:46:54.154Z","Thumbnail_Content":null,"Component":[{"id":54,"Component_name":"Loading","Component_data":"loading","Component_Image":{"id":1,"name":"Loading.png","alternativeText":null,"caption":null,"width":459,"height":470,"formats":{"thumbnail":{"name":"thumbnail_Club.png","hash":"thumbnail_Club_0a4c62f13d","ext":".png","mime":"image/png","path":null,"width":152,"height":156,"size":62.93,"url":"/uploads/thumbnail_Club_0a4c62f13d.png"}},"hash":"Club_0a4c62f13d","ext":".png","mime":"image/png","size":96.41,"url":"/uploads/Club_0a4c62f13d.png","previewUrl":null,"provider":"local","provider_metadata":null,"folderPath":"/","createdAt":"2023-01-21T10:10:39.413Z","updatedAt":"2023-01-22T13:30:13.266Z"}}],"Thumbnail_Image":null,"Background_Image":null,"Media_Component":[{"id":26,"Media_Description":"loading","Component_name":"Loading","Images":[{"id":1,"name":"Loading.png","alternativeText":null,"caption":null,"width":459,"height":470,"formats":{"thumbnail":{"name":"thumbnail_Club.png","hash":"thumbnail_Club_0a4c62f13d","ext":".png","mime":"image/png","path":null,"width":152,"height":156,"size":62.93,"url":"/uploads/thumbnail_Club_0a4c62f13d.png"}},"hash":"Club_0a4c62f13d","ext":".png","mime":"image/png","size":96.41,"url":"/uploads/Club_0a4c62f13d.png","previewUrl":null,"provider":"local","provider_metadata":null,"folderPath":"/","createdAt":"2023-01-21T10:10:39.413Z","updatedAt":"2023-01-22T13:30:13.266Z"}]}]});
  
  async function getData (){
    const api = `http://localhost:1337/api/homepagedata`;
    const result =await fetch(api);
    const getResult = await result.json();
    setData(getResult);
  }
  useEffect(()=>{
    getData();
},[])
 
  console.log(data);
  var c= data.length;
  let text = "";
  if(c%2==0)
  {
     text= "#D9D9D9";
  }
  else
  {
    text = "#7BB9C4";
  }
return(

<div id="container"  className="  flex flex-row gap-64 w-100% h-80 mt-0 pl-0 px-0  " style={{position:'relative' ,zIndex:'1',backgroundColor: text }} >
<div id="part1" className="flex flex-row ml-44 gap-x-6 ">
  <div className="image w-52 h-52"><img id="img" className=" h-52 w-52 " src={img1}alt=""/></div>
  <div className="content flex flex-col flex-wrap items-start justify-start   ">
    <div id="part3" className="details flex flex-col flex-wrap items-start justify-start gap-1  p-1 m-1 ">
    <div id="heading"><h1 className="text-2xl font-extrabold " id="head"  >STUDENTS GYMKHANA</h1><h1 className=" text-2xl   font-extrabold" id="head" >COUNCIL</h1></div>
      {/* <div className=" flex flex-row flex-wrap items-start justify-start"  ><div id="heading" className=" heading flex flex-row gap-2 "><h1  id="head" className=" text-2xl mt-2 font-extrabold ">STUDENTS</h1> <h1 id="head" className=" text-2xl mt-2 font-extrabold " > GYMKHANA</h1></div> 
         <h1 id="head" className="text-2xl ml-0 font-extrabold ">COUNCIL</h1></div>  */}
        <p align="left" id="one" className="  text-sm ">OLD SAC Building IIT Guwahati,<br/> Guwahati,<span id="assam"> Assam - 781039</span></p>
        <p align="left" id="two" className="text-sm">+91 -361-258162<br/>sgc@iitg.ac.in</p>
    </div>
     <div id="small" className="flex flex-row p-3 ml-4 mt-0 relative right-6 ">
        <a href="https://www.youtube.com/@sportsboardiitguwahati"><img id="img1" className="h-8 w-8" src={img2} alt=""/></a>
        <a href="https://twitter.com/IITGuwahati"><img id="img1" className="h-8 w-8" src={img3} alt=""/></a>
        <a href="https://instagram.com/sports_iit_guwahati?igshid=YmMyMTA2M2Y="><img id="img1"  className="h-8 w-8" src={img4} alt=""/></a>
        <a href="https://www.linkedin.com/school/iitg/"><img id="img1" className="h-8 w-8" src={img8} alt="" /> </a>
        {/* <img id="img1"  className="h-8 w-8"  src={img5} alt=""/> */}
     </div>
    </div>
    </div>
      <div id="part2" className=" flex flex-col mt-14  gap-2">
        <div id="para" className="flex flex-row gap-2 ">
            <img id="img3" className="h-16 w-16" src={img6} alt=""></img>
        <p align="left" id="three" className="text-sm content-start ">Maintained <span id="student">by Students</span><br/>Web committee<br/>IIT Guwahati</p>
        </div>
        <div id="last" className="element2 flex flex-row">
             <img id="imglast" src={img7} />
            <p id="four" className="text-sm">STudents Gymkhana  <span id="content-four"> Council IIT Guwahati</span></p>
        </div>
      </div>
  </div>
 

);
}
export default Footer;