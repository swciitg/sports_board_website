import Navbar from "../components/navbar";
import About_us from "../components/about_us";
import Facilities from "../components/facilities";
import Team_members from "../components/team_members";
import ClubRnG from "../components/clubRnG";
import Footer from "../components/Footer";
import Event from "../components/event";
import info from "../components/info"
import Eventone from "../components/event1";
import Animation from "../components/animation";
import Message from "../components/message";
import { useEffect, useState } from "react";
const Pages=()=> {
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
  return(
    <div className="App">
      <Navbar 
        name = {data.HomePage_Heading}
        slogan = {data.HomePage_Slogan}
      />
      {data.Component.map((item,index) =>{
            return (index)%2===0?<About_us name={item.Component_name} desc={item.Component_data} media={item.Component_Image.url}/>:<ClubRnG name={item.Component_name} desc={item.Component_data} media={item.Component_Image.url}/>
        })}
        {data.Media_Component.map((item,index) =>{
            return (index)%2===0?<Team_members name={item.Component_name} desc={item.Media_Description} media={item.Images} />:<Facilities name={item.Component_name} desc={item.Media_Description} media={item.Images}  />
        })}
      <Footer />
    

    </div>
  );
}

export default Pages;
