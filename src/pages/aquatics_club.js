import About_us from "../components/about_us";
import ClubRnG from "../components/clubRnG";
import Facilities from "../components/facilities";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import PastEvents from "../components/pastEvents";
import Team_members from "../components/team_members";
import { useLocation,useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BACKEND_URL from "../constants";
import Loader from "../components/Loader";
const AquaticsClub =  () => {
  const [ data, setData]=useState({});
  const [col1,setCol1]=useState(0);
  const {id}=useParams()
  async function getData (){
    // console.log(id);
    try{
    const api = `${BACKEND_URL}/api/clubinfo?page=${id}`;
    const result =await fetch(api);
    const getResult = await result.json();
    setLoad(true);
    setCol1(getResult[0].Components.length);
    setData(getResult[0]);
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
  console.log(col1)
    return (
       isLoaded ? (<div>
        <Navbar name={data.ClubName + "CLUB"} slogan={data.ClubSlogan}/>
        {data.Components.map((item,index) =>{
            return (index)%2===0?<About_us name={item.Component_name} desc={item.Component_data} media={item.Component_Image.url}/>:<ClubRnG name={item.Component_name} desc={item.Component_data} media={item.Component_Image.url}/>
        })}
        {}
        {data.Media_Components.map((item,index) =>{
            return col1%2? (index)%2===0?<Team_members name={item.Component_name} desc={item.Media_Description} media={item.Images} />:<Facilities name={item.Component_name} desc={item.Media_Description} media={item.Images}  />:(index)%2?<Team_members name={item.Component_name} desc={item.Media_Description} media={item.Images} />:<Facilities name={item.Component_name} desc={item.Media_Description} media={item.Images}  />;
        })}
        
        
        <Footer size={col1+1} />
       </div> ):
       (<Loader/>)    
 
      
    );

  
}

export default AquaticsClub;