import About_us from "../components/about_us";
import Activities from "../components/activities";
import ClubRnG from "../components/clubRnG";
import Facilities from "../components/facilities";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Team_members from "../components/team_members";
import PastEvents from "../components/pastEvents";
import { useEffect, useState } from "react";
const BasketballClub = () => {
      const [ data, setData]=useState({"data":{"id":12,"attributes":{"ClubName":"Loading","ClubSlogan":"Loading","createdAt":"2023-01-22T07:01:44.022Z","updatedAt":"2023-01-22T07:04:12.326Z","publishedAt":"2023-01-22T07:04:12.321Z","Thumbnail_Content":"Loading","Components":[{"id":53,"Component_name":"Loading","Component_data":"Loading","Component_Image":{"data":{"id":1,"attributes":{"name":"Loading.png","alternativeText":null,"caption":null,"width":459,"height":470,"formats":{"thumbnail":{"name":"thumbnail_Club.png","hash":"thumbnail_Club_0a4c62f13d","ext":".png","mime":"image/png","path":null,"width":152,"height":156,"size":62.93,"url":"/uploads/thumbnail_Club_0a4c62f13d.png"}},"hash":"Club_0a4c62f13d","ext":".png","mime":"image/png","size":96.41,"url":"/uploads/Club_0a4c62f13d.png","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2023-01-21T10:10:39.413Z","updatedAt":"2023-01-22T07:02:43.563Z"}}}}]}},"meta":{}});
  async function getData (){
    const api = `http://localhost:1337/api/clubs/2?populate[Components][populate]=*`;
    const result =await fetch(api);
    const getResult = await result.json();
    setData(getResult);
  }
  useEffect(()=>{
      getData();
  },[])
  console.log(data);
    return ( 
        <div>
        <Navbar name={data.data.attributes.ClubName} slogan={data.data.attributes.ClubSlogan} />
        {data.data.attributes.Components.map(item =>{
            return (item.id)%2?<About_us name={item.Component_name} desc={item.Component_data} media={item.Component_Image.data.attributes.url}/>:<ClubRnG name={item.Component_name} desc={item.Component_data} media={item.Component_Image.data.attributes.url}/>
        })}
        <Team_members />
        <Facilities />  
        <Footer />
        </div>
    );
}
 
export default BasketballClub;