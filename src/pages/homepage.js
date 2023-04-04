import Navbar from "../components/navbar";
import About_us from "../components/about_us";
import Facilities from "../components/facilities";
import Team_members from "../components/team_members";
import ClubRnG from "../components/clubRnG";
import Footer from "../components/Footer";
import Event from "../components/event";
import info from "../components/info"
import Animation from "../components/animation";
import Message from "../components/message";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import New from "../components/New";
import BACKEND_URL from "../constants";
const Pages=()=> {
  const [ data, setData]=useState({});
  
  async function getData (){
    try{
      const api = `${BACKEND_URL}/api/homepagedata`;
      const result =await fetch(api);
      const getResult = await result.json();
       setLoad(true);
      setData(getResult);
    }
     catch{

     }
    
  }
  useEffect(()=>{
    getData();
},[])
 const [isLoaded,setLoad] = useState(false);
  console.log(data);
  return(
    <div>
      {isLoaded ? ( <div className="App">
      <Navbar 
        name = {data.HomePage_Heading}
        slogan = {data.HomePage_Slogan}
      />
      {data.Component.map((item,index) =>{
            return (index)%2===0?<About_us name={item.Component_name} desc={item.Component_data} media={item.Component_Image.url}/>:<ClubRnG name={item.Component_name} desc={item.Component_data} media={item.Component_Image.url}/>
        })}
        {/* <New/> */}
        {data.Media_Component.map((item,index) =>{
            return (index)%2?<Team_members name={item.Component_name} desc={item.Media_Description} media={item.Images} />:<Facilities name={item.Component_name} desc={item.Media_Description} media={item.Images}  />
        })}
      <Footer size={2}/>
    

    </div>) : 
    (
      <Loader/>
    )
    }
   
    </div>
  );
}

export default Pages;
