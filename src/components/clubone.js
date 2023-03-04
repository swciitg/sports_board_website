import Animation from "./animation";
import Footer from "./Footer";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import React from "react";
import Animation2 from "./animation2";
import { Link } from "react-router-dom";
import BACKEND_URL from "../constants";
import Loader from "./Loader";


function Clubone()
{
    const [ data, setData]=useState([
     
    ]);

async function getData (){
  try{
    const api =  ` ${BACKEND_URL}/api/clubsdata`;
    const result =await fetch(api);
    const getResult = await result.json();
    setLoad(true);
    setData(getResult);
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
          <Navbar name={"Club Pages"}/>
          <div className="flex flex-col gap-4 mt-12 ">
          {data.map((item,index) =>{
              return (index)%2===0?<a href={"/clubs/"+item.ClubName}><Animation info={item} index={index}/></a>:<a href={"/clubs/"+item.ClubName}><Animation2 info={item} index={index}/></a>
          })}
          </div>
          <Footer size = {data.length}  ></Footer>
          </div>):
          (<Loader/>) 
       
    );
}
export default Clubone;