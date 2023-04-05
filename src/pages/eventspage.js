import Clubs from "../components/clubs";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import info from "../components/info"
import Animation from "../components/animation";
import Clubone from "../components/clubone";
import { useEffect, useState } from "react";
import Eventone from "../components/eventone";
import BACKEND_URL from "../constants";
const EventPages = () => {
  const [ data, setData]=useState();
  
  async function getData (){
    const api = `${BACKEND_URL}/api/alleventdata`;
    const result =await fetch(api);
    const getResult = await result.json();
    setData(getResult.data[0]);
  }
    useEffect(()=>{
      getData();
  },[])
 
  console.log(data);
   return (
       <div>
           {/* <Navbar
            name = {info[1].name}
            info = {info[1].info}
          />
           <Animation/> 
          <Footer/>  */}
         <Eventone  data={data}></Eventone>

       </div>


        );  

}
export default EventPages;