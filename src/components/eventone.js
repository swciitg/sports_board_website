import Animation from "./animation";
import Footer from "./Footer";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import React from "react";
import Animationthree from "./animation3";
import Animationfour from "./animation4";
function Eventone()
{
    const [ data, setData]=useState(
      [
        {
          "id": 1,
          "Event_Name": "Loading",
          "Event_Slogan": "With the pride of your hostel at stake, this time in the sporting arena",
          "createdAt": "2023-01-21T12:42:33.803Z",
          "updatedAt": "2023-01-26T14:05:03.872Z",
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
      ]  
    
    );

async function getData (){
    const api = `http://localhost:1337/api/alleventdata`;
    const result =await fetch(api);
    const getResult = await result.json();
    setData(getResult);
  }
  useEffect(()=>{
    getData();
},[])
 
  console.log(data);
    return(
        <div>
        <Navbar></Navbar>
        <div className="flex flex-col gap-4 mt-12 dnb">
        {data.map((item,index) =>{
            return (index)%2===0?<Animationfour info={item}/>:<Animationthree info={item} />
        })}
        </div>
        <Footer></Footer>
        </div>
    );
}
export default Eventone;