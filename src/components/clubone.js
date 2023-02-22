import Animation from "./animation";
import Footer from "./Footer";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import React from "react";
import Animation2 from "./animation2";
import { Link } from "react-router-dom";
import BACKEND_URL from "../constants";


function Clubone()
{
    const [ data, setData]=useState([
        {
        "id": 1,
        "ClubName": "Loading ",
        "ClubSlogan": "Loading",
        "createdAt": "2023-01-21T10:08:34.537Z",
        "updatedAt": "2023-01-26T14:02:23.230Z",
        "publishedAt": "2023-01-21T10:36:09.116Z",
        "Thumbnail_Content": "You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.\n",
        "Thumbnail_Image": {
          "id": 6,
          "name": "bb_slide3.jpg",
          "alternativeText": null,
          "caption": null,
          "width": 1200,
          "height": 794,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_bb_slide3.jpg",
              "hash": "thumbnail_bb_slide3_8cf55d6dc6",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 236,
              "height": 156,
              "size": 7.6,
              "url": "/uploads/thumbnail_bb_slide3_8cf55d6dc6.jpg"
            },
            "large": {
              "name": "large_bb_slide3.jpg",
              "hash": "large_bb_slide3_8cf55d6dc6",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 1000,
              "height": 662,
              "size": 63.88,
              "url": "/uploads/large_bb_slide3_8cf55d6dc6.jpg"
            },
            "medium": {
              "name": "medium_bb_slide3.jpg",
              "hash": "medium_bb_slide3_8cf55d6dc6",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 750,
              "height": 496,
              "size": 40.4,
              "url": "/uploads/medium_bb_slide3_8cf55d6dc6.jpg"
            },
            "small": {
              "name": "small_bb_slide3.jpg",
              "hash": "small_bb_slide3_8cf55d6dc6",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 331,
              "size": 22.23,
              "url": "/uploads/small_bb_slide3_8cf55d6dc6.jpg"
            }
          },
          "hash": "bb_slide3_8cf55d6dc6",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "size": 86.72,
          "url": "/uploads/bb_slide3_8cf55d6dc6.jpg",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "folderPath": "/3",
          "createdAt": "2023-01-21T11:01:05.081Z",
          "updatedAt": "2023-01-21T11:01:20.928Z"
        }
       },
    ]);

async function getData (){
    const api =  ` ${BACKEND_URL}/api/clubsdata`;
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
        <Navbar name={"Club Pages"}/>
        <div className="flex flex-col gap-4 mt-12 ">
        {data.map((item,index) =>{
            return (index)%2===0?<a href={"/clubs/"+item.ClubName}><Animation info={item} index={index}/></a>:<a href={"/clubs/"+item.ClubName}><Animation2 info={item} index={index}/></a>
        })}
        </div>
        <Footer></Footer>
        </div>
    );
}
export default Clubone;