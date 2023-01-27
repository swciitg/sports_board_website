import Clubs from "../components/clubs";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import info from "../components/info"
import Animation from "../components/animation";
import Clubone from "../components/clubone";
import { useEffect, useState } from "react";

const ClubPages = () => {
  const [ data, setData]=useState();
  
  async function getData (){
    const api = `http://localhost:1337/api/clubsdata`;
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
         <Clubone  data={data}></Clubone>

       </div>


        );  

}
export default ClubPages;
