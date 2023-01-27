import Animation from "./animation";
import Footer from "./Footer";
import Navbar from "./navbar";
import { useEffect, useState } from "react";



function Clubone()
{
    const [ data, setData]=useState();
  
    async function getData (){
      const api = `http://localhost:1337/api/clubsdata`;
      const result =await fetch(api);
      const getResult = await result.json();
      setData(getResult);
    }
      useEffect(()=>{
        getData();
    },[])
   
    console.log(data);
    return(
        <div>
        <Navbar></Navbar>
        <Animation></Animation>
        <Footer></Footer>
        </div>
    );
}
export default Clubone;