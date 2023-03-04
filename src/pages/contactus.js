import React from 'react'
import Navbar from '../components/navbar'
import Conta from '../components/conta' 
import Conta2 from '../components/conta2'
import Conta3 from '../components/conta3'
import Footer from '../components/Footer'
import { useEffect, useState } from "react";
import BACKEND_URL from '../constants'
import Loader from '../components/Loader'
const Contactus = () => {
  const [ data, setData]=useState([
    {
      "id": 2,
      "Position_Name": "CHAIRMAN",
      "Name": "Prof. Deepak Sharma",
      "Department": "Department of Mechanical Engineering",
      "Slogan": " overall development of your personality",
      "Phone_Num": "+91-361-258 3985",
      "Mail_ID": "chrsports@iitg.ac.in",
      "Linkedin_ID": "www.aas",
      "createdAt": "2023-01-25T14:53:29.911Z",
      "updatedAt": "2023-01-25T14:53:29.911Z",
      "publishedAt": null,
      "Image": {
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
  ]);
  
  async function getData (){
    try{
    const api = `${BACKEND_URL}/api/contactinfo`;
    const result =await fetch(api);
    const getResult = await result.json();
    setData(getResult);
    setLoad(true);
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
  return (
    isLoaded ? (<div>
      <Navbar name={"Contact Us"} slogan={"We are here for you"}/>
      {data.map((item,index)=>{
        return index%2?<Conta2 info={item}/>:<Conta info={item}/>
      })}
      <Footer/>
    </div>) : 
    (<Loader/>)
    
  )
}
export default Contactus;
