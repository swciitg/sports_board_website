import Animation from "./animation";
import Footer from "./Footer";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import React from "react";
import Animation2 from "./animation2";
import { Link } from "react-router-dom";
import BACKEND_URL from "../constants";
import Loader from "./Loader";


function Clubone()
{
    const [ data, setData]=useState([
      {
        "id": 3,
        "ClubName": "Aquatics",
        "ClubSlogan": null,
        "Thumbnail_Content": null,
        "createdAt": "2023-02-22T20:48:06.216Z",
        "updatedAt": "2023-03-04T14:18:41.172Z",
        "publishedAt": "2023-02-22T20:55:24.210Z",
        "Thumbnail_Image": {
        "id": 11,
        "name": "spirit.jpg",
        "alternativeText": null,
        "caption": null,
        "width": 534,
        "height": 960,
        "formats": {
        "small": {
        "ext": ".jpg",
        "url": "/uploads/small_spirit_90522ace8a.jpg",
        "hash": "small_spirit_90522ace8a",
        "mime": "image/jpeg",
        "name": "small_spirit.jpg",
        "path": null,
        "size": 18.86,
        "width": 278,
        "height": 500
        },
        "medium": {
        "ext": ".jpg",
        "url": "/uploads/medium_spirit_90522ace8a.jpg",
        "hash": "medium_spirit_90522ace8a",
        "mime": "image/jpeg",
        "name": "medium_spirit.jpg",
        "path": null,
        "size": 33.58,
        "width": 417,
        "height": 750
        },
        "thumbnail": {
        "ext": ".jpg",
        "url": "/uploads/thumbnail_spirit_90522ace8a.jpg",
        "hash": "thumbnail_spirit_90522ace8a",
        "mime": "image/jpeg",
        "name": "thumbnail_spirit.jpg",
        "path": null,
        "size": 3.39,
        "width": 86,
        "height": 156
        }
        },
        "hash": "spirit_90522ace8a",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "size": 40.82,
        "url": "/uploads/spirit_90522ace8a.jpg",
        "previewUrl": null,
        "provider": "local",
        "provider_metadata": null,
        "folderPath": "/",
        "createdAt": "2023-02-22T21:06:36.742Z",
        "updatedAt": "2023-03-04T14:33:48.361Z"
        }
        },
    ]);

async function getData (){
  try{
    const api =  ` ${BACKEND_URL}/api/clubsdata`;
    const result =await fetch(api);
    const getResult = await result.json();
    setLoad(true);
    setData(getResult);
  }
  catch
  {

  }
  }
  useEffect(()=>{
    getData();
},[])
const [isLoaded,setLoad] = useState(false);
  console.log(data);
    return(
        isLoaded ? ( <div>
          <Navbar name={"Club Pages"}/>
          <div className="flex flex-col gap-4 mt-12 ">
          {data.map((item,index) =>{
              return (index)%2===0?<a href={"/clubs/"+item.ClubName}><Animation info={item} index={index}/></a>:<a href={"/clubs/"+item.ClubName}><Animation2 info={item} index={index}/></a>
          })}
          </div>
          <Footer></Footer>
          </div>):
          (<Loader/>) 
       
    );
}
export default Clubone;