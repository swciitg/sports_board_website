import React from "react";
import img1 from '../images/image 8.png';
import Image from "./image";
import "./hover.css";
import { useState,useEffect } from "react";
import BACKEND_URL from "../constants";
// 1280 px pe image ki position change karna fir ,, 1167px pe font ka size image ka position ,,
function Event(){
    const [ data, setData]=useState(
      [
        {
          "id": 1,
          "Event_Name": "Spardha",
          "Event_Slogan": "With the pride of your hostel at stake, this time in the sporting arena",
          "createdAt": "2023-01-21T12:42:33.803Z",
          "updatedAt": "2023-02-01T06:12:14.684Z",
          "publishedAt": "2023-01-21T12:42:34.929Z",
          "Thumbnail_Content": "You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.\n",
          "Thumbnail_Image": {
            "id": 1,
            "name": "Loading.png",
            "alternativeText": null,
            "caption": null,
            "width": 459,
            "height": 470,
            "formats": {
              "thumbnail": {
                "name": "thumbnail_Club.png",
                "hash": "thumbnail_Club_0a4c62f13d",
                "ext": ".png",
                "mime": "image/png",
                "path": null,
                "width": 152,
                "height": 156,
                "size": 62.93,
                "url": "/uploads/thumbnail_Club_0a4c62f13d.png"
              }
            },
            "hash": "Club_0a4c62f13d",
            "ext": ".png",
            "mime": "image/png",
            "size": 96.41,
            "url": "/uploads/Club_0a4c62f13d.png",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "folderPath": "/",
            "createdAt": "2023-01-21T10:10:39.413Z",
            "updatedAt": "2023-01-22T13:30:13.266Z"
          }
        },
        {
          "id": 2,
          "Event_Name": "Spirit",
          "Event_Slogan": "Spirit is the annual sporting festival of IIT Guwahati. Held in the last week of October, it witnesses participation from across the North East.",
          "createdAt": "2023-01-21T12:45:56.967Z",
          "updatedAt": "2023-01-26T14:06:01.500Z",
          "publishedAt": "2023-01-21T12:45:59.104Z",
          "Thumbnail_Content": "You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.\n",
          "Thumbnail_Image": {
            "id": 1,
            "name": "Loading.png",
            "alternativeText": null,
            "caption": null,
            "width": 459,
            "height": 470,
            "formats": {
              "thumbnail": {
                "name": "thumbnail_Club.png",
                "hash": "thumbnail_Club_0a4c62f13d",
                "ext": ".png",
                "mime": "image/png",
                "path": null,
                "width": 152,
                "height": 156,
                "size": 62.93,
                "url": "/uploads/thumbnail_Club_0a4c62f13d.png"
              }
            },
            "hash": "Club_0a4c62f13d",
            "ext": ".png",
            "mime": "image/png",
            "size": 96.41,
            "url": "/uploads/Club_0a4c62f13d.png",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "folderPath": "/",
            "createdAt": "2023-01-21T10:10:39.413Z",
            "updatedAt": "2023-01-22T13:30:13.266Z"
          }
        },
        {
          "id": 3,
          "Event_Name": "Manthan",
          "Event_Slogan": " As ten bastions of pride prepare to battle it out for the Manthan trophy",
          "createdAt": "2023-01-24T11:55:17.211Z",
          "updatedAt": "2023-01-26T14:06:33.296Z",
          "publishedAt": "2023-01-24T12:17:34.391Z",
          "Thumbnail_Content": "You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.\n",
          "Thumbnail_Image": {
            "id": 1,
            "name": "Loading.png",
            "alternativeText": null,
            "caption": null,
            "width": 459,
            "height": 470,
            "formats": {
              "thumbnail": {
                "name": "thumbnail_Club.png",
                "hash": "thumbnail_Club_0a4c62f13d",
                "ext": ".png",
                "mime": "image/png",
                "path": null,
                "width": 152,
                "height": 156,
                "size": 62.93,
                "url": "/uploads/thumbnail_Club_0a4c62f13d.png"
              }
            },
            "hash": "Club_0a4c62f13d",
            "ext": ".png",
            "mime": "image/png",
            "size": 96.41,
            "url": "/uploads/Club_0a4c62f13d.png",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "folderPath": "/",
            "createdAt": "2023-01-21T10:10:39.413Z",
            "updatedAt": "2023-01-22T13:30:13.266Z"
          }
        },
        {
          "id": 4,
          "Event_Name": "Inter-iit",
          "Event_Slogan": "Inter IIT Sports Meet is a contest held every winter at one of the IITs",
          "createdAt": "2023-01-24T11:58:35.332Z",
          "updatedAt": "2023-01-26T14:06:51.127Z",
          "publishedAt": "2023-01-24T12:17:04.155Z",
          "Thumbnail_Content": "You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.\n",
          "Thumbnail_Image": {
            "id": 5,
            "name": "ath_2.jpg",
            "alternativeText": null,
            "caption": null,
            "width": 960,
            "height": 720,
            "formats": {
              "thumbnail": {
                "name": "thumbnail_ath_2.jpg",
                "hash": "thumbnail_ath_2_c319d2edaf",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "path": null,
                "width": 208,
                "height": 156,
                "size": 10.59,
                "url": "/uploads/thumbnail_ath_2_c319d2edaf.jpg"
              },
              "small": {
                "name": "small_ath_2.jpg",
                "hash": "small_ath_2_c319d2edaf",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "path": null,
                "width": 500,
                "height": 375,
                "size": 47.78,
                "url": "/uploads/small_ath_2_c319d2edaf.jpg"
              },
              "medium": {
                "name": "medium_ath_2.jpg",
                "hash": "medium_ath_2_c319d2edaf",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "path": null,
                "width": 750,
                "height": 563,
                "size": 96.71,
                "url": "/uploads/medium_ath_2_c319d2edaf.jpg"
              }
            },
            "hash": "ath_2_c319d2edaf",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "size": 153.67,
            "url": "/uploads/ath_2_c319d2edaf.jpg",
            "previewUrl": null,
            "provider": "local",
            "provider_metadata": null,
            "folderPath": "/2",
            "createdAt": "2023-01-21T10:28:33.571Z",
            "updatedAt": "2023-01-21T10:28:33.571Z"
          }
        }
      ]
      
      );
  
  async function getData (){
      const api = `${BACKEND_URL}api/alleventdata`;
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