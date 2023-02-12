import About_us from "../components/about_us";
import ClubRnG from "../components/clubRnG";
import Facilities from "../components/facilities";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import PastEvents from "../components/pastEvents";
import Team_members from "../components/team_members";
import { useLocation,useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Spardha =  () => {
  const [ data_Event, setData]=useState({"id":1,"Event_Name":"Loading","Event_Slogan":"loading","createdAt":"2023-01-22T18:44:58.917Z","updatedAt":"2023-01-22T18:46:54.160Z","publishedAt":"2023-01-22T18:46:54.154Z","Thumbnail_Content":null,"Components":[{"id":45,"Component_name":"Loading","Component_data":"loading","Component_Image":{"id":1,"name":"Loading.png","alternativeText":null,"caption":null,"width":459,"height":470,"formats":{"thumbnail":{"name":"thumbnail_Club.png","hash":"thumbnail_Club_0a4c62f13d","ext":".png","mime":"image/png","path":null,"width":152,"height":156,"size":62.93,"url":"/uploads/thumbnail_Club_0a4c62f13d.png"}},"hash":"Club_0a4c62f13d","ext":".png","mime":"image/png","size":96.41,"url":"/uploads/Club_0a4c62f13d.png","previewUrl":null,"provider":"local","provider_metadata":null,"folderPath":"/","createdAt":"2023-01-21T10:10:39.413Z","updatedAt":"2023-01-22T13:30:13.266Z"}}],"Thumbnail_Image":null,"Background_Image":null,"Media_Component":[{"id":22,"Media_Description":"loading","Component_name":"Loading","Images":[{"id":1,"name":"Loading.png","alternativeText":null,"caption":null,"width":459,"height":470,"formats":{"thumbnail":{"name":"thumbnail_Club.png","hash":"thumbnail_Club_0a4c62f13d","ext":".png","mime":"image/png","path":null,"width":152,"height":156,"size":62.93,"url":"/uploads/thumbnail_Club_0a4c62f13d.png"}},"hash":"Club_0a4c62f13d","ext":".png","mime":"image/png","size":96.41,"url":"/uploads/Club_0a4c62f13d.png","previewUrl":null,"provider":"local","provider_metadata":null,"folderPath":"/","createdAt":"2023-01-21T10:10:39.413Z","updatedAt":"2023-01-22T13:30:13.266Z"}]}]});
  const {id}=useParams()
  const [col1,setCol1]=useState(0);
  async function getData (){
    // console.log(id)
    const api = `http://localhost:1337/api/eventdata?page=${id}`;
    const result =await fetch(api);
    const getResult = await result.json();
    setData(getResult[0]);
    setCol1(getResult[0].Components.length);
  }
  useEffect(()=>{
    getData();
},[])
 
  console.log(data_Event);
    return (
      <div>
        <Navbar name={data_Event.Event_Name} slogan={data_Event.Event_Slogan}/>
        {data_Event.Components.map((item,index) =>{
            return (index)%2===0?<About_us name={item.Component_name} desc={item.Component_data} media={item.Component_Image.url} />:<ClubRnG  name={item.Component_name} desc={item.Component_data} media={item.Component_Image.url}  />
        })}
        {data_Event.Media_Component.map((item,index) =>{
               return col1%2? (index)%2===0?<Team_members name={item.Component_name} desc={item.Media_Description} media={item.Images} />:<Facilities name={item.Component_name} desc={item.Media_Description} media={item.Images}  />:(index)%2?<Team_members name={item.Component_name} desc={item.Media_Description} media={item.Images} />:<Facilities name={item.Component_name} desc={item.Media_Description} media={item.Images}  />;
        })}
        
        
        <Footer />
       </div> 
    );

  
}

export default Spardha;