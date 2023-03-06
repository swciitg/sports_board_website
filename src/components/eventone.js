import Animation from "./animation";
import Footer from "./Footer";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import React from "react";
import Animationthree from "./animation3";
import Animationfour from "./animation4";
import BACKEND_URL from "../constants";
import Loader from "./Loader";
function Eventone()
{
    const [ data, setData]=useState(
      []  
    );

async function getData (){
    try
    {
    const api = `${BACKEND_URL}/api/alleventdata`;
    const result =await fetch(api);
    const getResult = await result.json();
    setData(getResult);
    setLoad(true);
    }
    catch
    {
       
    }
    }
  useEffect(()=>{
    getData();
},[])
const [isLoaded,setLoad] = useState(false);
  console.log(data);
    return(
         isLoaded ? ( <div>
          <Navbar name={"EVENTS"}></Navbar>
          <div className="flex flex-col gap-4 mt-12 ">
          {data.map((item,index) =>{
            return (index)%2===0?<a href={"/events/"+item.Event_Name}><Animationfour info={item} index={index}/></a>:<a href={"/events/"+item.Event_Name}><Animationthree info={item} index={index}/></a>
          })}
          </div>
          <Footer size={2}></Footer>
          </div>):
          (<Loader/>)
       
    );
}
export default Eventone;