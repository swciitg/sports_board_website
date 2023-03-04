import React from "react";
import img1 from '../images/image 8.png';
import Image from "./image";
import "./hover.css";
import { useState,useEffect } from "react";
import BACKEND_URL from "../constants";
// 1280 px pe image ki position change karna fir ,, 1167px pe font ka size image ka position ,,
function Event(){
    const [ data, setData]=useState(
[{"id":4,"Event_Name":"Inter-IIT","Event_Slogan":null,"Thumbnail_Content":null,"createdAt":"2023-02-22T21:08:30.971Z","updatedAt":"2023-03-04T13:54:08.140Z","publishedAt":"2023-02-22T21:08:33.992Z","Thumbnail_Image":{"id":7,"name":"hockey_slide1.jpg","alternativeText":null,"caption":null,"width":960,"height":640,"formats":{"small":{"ext":".jpg","url":"/uploads/small_hockey_slide1_f9565e75a3.jpg","hash":"small_hockey_slide1_f9565e75a3","mime":"image/jpeg","name":"small_hockey_slide1.jpg","path":null,"size":35.03,"width":500,"height":333},"medium":{"ext":".jpg","url":"/uploads/medium_hockey_slide1_f9565e75a3.jpg","hash":"medium_hockey_slide1_f9565e75a3","mime":"image/jpeg","name":"medium_hockey_slide1.jpg","path":null,"size":66.25,"width":750,"height":500},"thumbnail":{"ext":".jpg","url":"/uploads/thumbnail_hockey_slide1_f9565e75a3.jpg","hash":"thumbnail_hockey_slide1_f9565e75a3","mime":"image/jpeg","name":"thumbnail_hockey_slide1.jpg","path":null,"size":10.11,"width":234,"height":156}},"hash":"hockey_slide1_f9565e75a3","ext":".jpg","mime":"image/jpeg","size":78.23,"url":"/uploads/hockey_slide1_f9565e75a3.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"folderPath":"/","createdAt":"2023-02-22T20:59:04.461Z","updatedAt":"2023-02-22T20:59:04.461Z"}},{"id":2,"Event_Name":"Spardha","Event_Slogan":null,"Thumbnail_Content":null,"createdAt":"2023-02-22T21:06:41.317Z","updatedAt":"2023-03-04T13:54:21.915Z","publishedAt":"2023-02-22T21:06:42.681Z","Thumbnail_Image":{"id":8,"name":"cricket_slide1.jpg","alternativeText":null,"caption":null,"width":1200,"height":800,"formats":{"large":{"ext":".jpg","url":"/uploads/large_cricket_slide1_b3000a56cd.jpg","hash":"large_cricket_slide1_b3000a56cd","mime":"image/jpeg","name":"large_cricket_slide1.jpg","path":null,"size":130.81,"width":1000,"height":667},"small":{"ext":".jpg","url":"/uploads/small_cricket_slide1_b3000a56cd.jpg","hash":"small_cricket_slide1_b3000a56cd","mime":"image/jpeg","name":"small_cricket_slide1.jpg","path":null,"size":36.35,"width":500,"height":333},"medium":{"ext":".jpg","url":"/uploads/medium_cricket_slide1_b3000a56cd.jpg","hash":"medium_cricket_slide1_b3000a56cd","mime":"image/jpeg","name":"medium_cricket_slide1.jpg","path":null,"size":77.24,"width":750,"height":500},"thumbnail":{"ext":".jpg","url":"/uploads/thumbnail_cricket_slide1_b3000a56cd.jpg","hash":"thumbnail_cricket_slide1_b3000a56cd","mime":"image/jpeg","name":"thumbnail_cricket_slide1.jpg","path":null,"size":8.93,"width":234,"height":156}},"hash":"cricket_slide1_b3000a56cd","ext":".jpg","mime":"image/jpeg","size":185.97,"url":"/uploads/cricket_slide1_b3000a56cd.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"folderPath":"/","createdAt":"2023-02-22T21:00:56.107Z","updatedAt":"2023-02-22T21:00:56.107Z"}},{"id":3,"Event_Name":"Spirit","Event_Slogan":null,"Thumbnail_Content":null,"createdAt":"2023-02-22T21:07:39.395Z","updatedAt":"2023-03-04T13:54:31.793Z","publishedAt":"2023-02-22T21:07:40.349Z","Thumbnail_Image":{"id":11,"name":"spirit.jpg","alternativeText":null,"caption":null,"width":534,"height":960,"formats":{"small":{"ext":".jpg","url":"/uploads/small_spirit_90522ace8a.jpg","hash":"small_spirit_90522ace8a","mime":"image/jpeg","name":"small_spirit.jpg","path":null,"size":18.86,"width":278,"height":500},"medium":{"ext":".jpg","url":"/uploads/medium_spirit_90522ace8a.jpg","hash":"medium_spirit_90522ace8a","mime":"image/jpeg","name":"medium_spirit.jpg","path":null,"size":33.58,"width":417,"height":750},"thumbnail":{"ext":".jpg","url":"/uploads/thumbnail_spirit_90522ace8a.jpg","hash":"thumbnail_spirit_90522ace8a","mime":"image/jpeg","name":"thumbnail_spirit.jpg","path":null,"size":3.39,"width":86,"height":156}},"hash":"spirit_90522ace8a","ext":".jpg","mime":"image/jpeg","size":40.82,"url":"/uploads/spirit_90522ace8a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"folderPath":"/","createdAt":"2023-02-22T21:06:36.742Z","updatedAt":"2023-02-22T21:06:36.742Z"}},{"id":5,"Event_Name":"Manthan","Event_Slogan":null,"Thumbnail_Content":null,"createdAt":"2023-03-04T14:00:39.140Z","updatedAt":"2023-03-04T14:00:39.140Z","publishedAt":null,"Thumbnail_Image":{"id":11,"name":"spirit.jpg","alternativeText":null,"caption":null,"width":534,"height":960,"formats":{"small":{"ext":".jpg","url":"/uploads/small_spirit_90522ace8a.jpg","hash":"small_spirit_90522ace8a","mime":"image/jpeg","name":"small_spirit.jpg","path":null,"size":18.86,"width":278,"height":500},"medium":{"ext":".jpg","url":"/uploads/medium_spirit_90522ace8a.jpg","hash":"medium_spirit_90522ace8a","mime":"image/jpeg","name":"medium_spirit.jpg","path":null,"size":33.58,"width":417,"height":750},"thumbnail":{"ext":".jpg","url":"/uploads/thumbnail_spirit_90522ace8a.jpg","hash":"thumbnail_spirit_90522ace8a","mime":"image/jpeg","name":"thumbnail_spirit.jpg","path":null,"size":3.39,"width":86,"height":156}},"hash":"spirit_90522ace8a","ext":".jpg","mime":"image/jpeg","size":40.82,"url":"/uploads/spirit_90522ace8a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"folderPath":"/","createdAt":"2023-02-22T21:06:36.742Z","updatedAt":"2023-02-22T21:06:36.742Z"}}]      );
  
  async function getData (){
      const api = `${BACKEND_URL}/api/alleventdata`;
      const result =await fetch(api);
      const getResult = await result.json();
      setData(getResult);
    }
    useEffect(()=>{
      getData();
  },[])
return(
<div className="overall_evemain">
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
      <Image name={data[0].Event_Name} image_url = {data[0].Thumbnail_Image.url}></Image>
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
      <Image  name={data[1].Event_Name} image_url = {data[1].Thumbnail_Image.url}></Image>
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
      <Image  name={data[2].Event_Name}    image_url = {data[2].Thumbnail_Image.url}></Image>
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
    <div id="line3" className="lines absolute top-1 "></div>
    </div>
    {/* <div>
        <img className="four" src={img1}></img>
     </div> */}
     <div className="four">
      <Image  name={data[3].Event_Name}    image_url = {data[3].Thumbnail_Image.url}></Image>  
      {/* {data[3].Thumbnail_Image.url} */}
     </div>
    </div>
   
</div>


</div>




);
}
export default Event;