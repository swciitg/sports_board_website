import About_us from "../components/about_us";
import ClubRnG from "../components/clubRnG";
import Facilities from "../components/facilities";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import PastEvents from "../components/pastEvents";
import Team_members from "../components/team_members";
import { useEffect, useState } from "react";
const AquaticsClub =  () => {
<<<<<<< HEAD
  const [ data, setData]=useState({"data":{"id":12,"attributes":{"ClubName":"Loading","ClubSlogan":"Loading","createdAt":"2023-01-22T07:01:44.022Z","updatedAt":"2023-01-22T07:04:12.326Z","publishedAt":"2023-01-22T07:04:12.321Z","Thumbnail_Content":"Loading","Components":[{"id":53,"Component_name":"Loading","Component_data":"Loading","Component_Image":{"data":{"id":1,"attributes":{"name":"Loading.png","alternativeText":null,"caption":null,"width":459,"height":470,"formats":{"thumbnail":{"name":"thumbnail_Club.png","hash":"thumbnail_Club_0a4c62f13d","ext":".png","mime":"image/png","path":null,"width":152,"height":156,"size":62.93,"url":"/uploads/thumbnail_Club_0a4c62f13d.png"}},"hash":"Club_0a4c62f13d","ext":".png","mime":"image/png","size":96.41,"url":"/uploads/Club_0a4c62f13d.png","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2023-01-21T10:10:39.413Z","updatedAt":"2023-01-22T07:02:43.563Z"}}}}]}},"meta":{}});
  const [ datamulti,setDatamulti] = useState({"data": {
    "id": 1,
    "attributes": {
      "ClubName": "Aquatics Club",
      "ClubSlogan": "Lorem Ipsum",
      "createdAt": "2023-01-21T10:08:34.537Z",
      "updatedAt": "2023-01-22T16:37:31.740Z",
      "publishedAt": "2023-01-21T10:36:09.116Z",
      "Thumbnail_Content": null,
      "Media_Components": [
        {
          "id": 27,
          "Component_name": "Loading",
          "Media_Description": "Loading",
          "Images": {
            "data": [
              {
                "id": 1,
                "attributes": {
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
                  "createdAt": "2023-01-21T10:10:39.413Z",
                  "updatedAt": "2023-01-22T13:30:13.266Z"
                }
              }
            ]
          }
        }
      ]
    }
  }
 } );
=======
  const [ data, setData]=useState({"id":13,"ClubName":"Loading","ClubSlogan":"loading","createdAt":"2023-01-22T18:44:58.917Z","updatedAt":"2023-01-22T18:46:54.160Z","publishedAt":"2023-01-22T18:46:54.154Z","Thumbnail_Content":null,"Components":[{"id":54,"Component_name":"Loading","Component_data":"loading","Component_Image":{"id":1,"name":"Loading.png","alternativeText":null,"caption":null,"width":459,"height":470,"formats":{"thumbnail":{"name":"thumbnail_Club.png","hash":"thumbnail_Club_0a4c62f13d","ext":".png","mime":"image/png","path":null,"width":152,"height":156,"size":62.93,"url":"/uploads/thumbnail_Club_0a4c62f13d.png"}},"hash":"Club_0a4c62f13d","ext":".png","mime":"image/png","size":96.41,"url":"/uploads/Club_0a4c62f13d.png","previewUrl":null,"provider":"local","provider_metadata":null,"folderPath":"/","createdAt":"2023-01-21T10:10:39.413Z","updatedAt":"2023-01-22T13:30:13.266Z"}}],"Thumbnail_Image":null,"Background_Image":null,"Media_Components":[{"id":26,"Media_Description":"loading","Component_name":"Loading","Images":[{"id":1,"name":"Loading.png","alternativeText":null,"caption":null,"width":459,"height":470,"formats":{"thumbnail":{"name":"thumbnail_Club.png","hash":"thumbnail_Club_0a4c62f13d","ext":".png","mime":"image/png","path":null,"width":152,"height":156,"size":62.93,"url":"/uploads/thumbnail_Club_0a4c62f13d.png"}},"hash":"Club_0a4c62f13d","ext":".png","mime":"image/png","size":96.41,"url":"/uploads/Club_0a4c62f13d.png","previewUrl":null,"provider":"local","provider_metadata":null,"folderPath":"/","createdAt":"2023-01-21T10:10:39.413Z","updatedAt":"2023-01-22T13:30:13.266Z"}]}]});
  
>>>>>>> 498d5d96498b689dcf3cbed17555e45794aedfa8
  async function getData (){
    const api = `http://localhost:1337/api/clubinfo?page=aquatics`;
    const result =await fetch(api);
    const getResult = await result.json();
    setData(getResult[0]);
  }
  async function getDatamulti (){
    const api = `http://localhost:1337/api/clubs/1?populate[Media_Components][populate]=*`;
    const result =await fetch(api);
    const getResult = await result.json();
    setDatamulti(getResult);
  }
  useEffect(()=>{
<<<<<<< HEAD
      getData();getDatamulti ();
  },[])
=======
    getData();
},[])
 
>>>>>>> 498d5d96498b689dcf3cbed17555e45794aedfa8
  console.log(data);
  console.log(datamulti);
    return (
      <div>
<<<<<<< HEAD
        <Navbar name={data.data.attributes.ClubName} slogan={data.data.attributes.ClubSlogan}/>
        {data.data.attributes.Components.map((item,index) =>{
            return (index)%2===0?<About_us name={item.Component_name} desc={item.Component_data} media={item.Component_Image.data.attributes.url}/>:<ClubRnG name={item.Component_name} desc={item.Component_data} media={item.Component_Image.data.attributes.url}/>
        })}
        {datamulti.data.attributes.Media_Components.map((item,index) =>{
            return (index)%2===0?<Team_members name={item.Component_name} desc={item.Media_Description} media={item.Images.data} />:<Facilities name={item.Component_name} />
=======
        <Navbar name={data.ClubName} slogan={data.ClubSlogan}/>
        {data.Components.map((item,index) =>{
            return (index)%2===0?<About_us name={item.Component_name} desc={item.Component_data} media={item.Component_Image.url}/>:<ClubRnG name={item.Component_name} desc={item.Component_data} media={item.Component_Image.url}/>
        })}
        {data.Media_Components.map((item,index) =>{
            return (index)%2===0?<Team_members name={item.Component_name} desc={item.Media_Description} media={item.Images} />:<Facilities name={item.Component_name} desc={item.Media_Description} media={item.Images}  />
>>>>>>> 498d5d96498b689dcf3cbed17555e45794aedfa8
        })}
        
        
        <Footer />
       </div> 
    );

  
}

export default AquaticsClub;