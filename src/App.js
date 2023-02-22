import AquaticsClub from "./pages/aquatics_club";
import BasketballClub from "./pages/basketballClub";
import Spardha from "./pages/spardha";
import ClubPages from "./pages/clubsPages";
import Homepage from "./pages/homepage";
import { Route , Routes} from "react-router-dom";
import Contactus from "./pages/contactus";
import Manthan from "./pages/manthan";
import Interiit from "./pages/interiit";
import Spirit from "./pages/spirit";
import EventPages from "./pages/eventspage";
import { useEffect, useState } from "react";
import BACKEND_URL from "./constants";
function App() {
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
  const [ data2, setData2]=useState();
  
  async function getData2 (){
    const api = `${BACKEND_URL}/api/alleventdata`;
    const result =await fetch(api);
    const getResult = await result.json();
    setData(getResult.data[0]);
  }
    useEffect(()=>{
      getData2();
  },[])
 
  async function getData (){
    const api = `${BACKEND_URL}/api/clubsdata`;
    const result =await fetch(api);
    const getResult = await result.json();
    setData(getResult.data[0]);
  }
    useEffect(()=>{
      getData();
  },[])
 
  return (
    <div className="App">
    <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/clubs' element={< ClubPages/>} />
          <Route path='/events'element={<EventPages />} />
          <Route path='/contacts'element={<Contactus />} />
          <Route path={"/clubs/:id"} element={<AquaticsClub  />} />
          <Route path={"/events/:id"} element={<Spardha  />} />
          
   </Routes>
  
   </div>
  );
}

export default App;
