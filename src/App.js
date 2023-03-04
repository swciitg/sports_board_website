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
  const [ data2, setData2]=useState();
  
  async function getData2 (){
    const api = `${BACKEND_URL}/api/alleventdata`;
    const result =await fetch(api);
    const getResult = await result.json();
    setData(getResult[0]);
  }
    useEffect(()=>{
      getData2();
  },[])
 
  async function getData (){
    const api = `${BACKEND_URL}/api/clubsdata`;
    const result =await fetch(api);
    const getResult = await result.json();
    setData(getResult[0]);
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
