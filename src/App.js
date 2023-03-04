import AquaticsClub from "./pages/aquatics_club";
import Spardha from "./pages/spardha";
import ClubPages from "./pages/clubsPages";
import Homepage from "./pages/homepage";
import { Route , Routes} from "react-router-dom";
import Contactus from "./pages/contactus";
import EventPages from "./pages/eventspage";
import { useEffect, useState } from "react";
import BACKEND_URL from "./constants";
function App() {
  const [ data, setData]=useState([]);
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
