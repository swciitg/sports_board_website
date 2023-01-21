import About_us from "../components/about_us";
import Activities from "../components/activities";
import ClubRnG from "../components/clubRnG";
import Facilities from "../components/facilities";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Team_members from "../components/team_members";
import PastEvents from "../components/pastEvents";
import { useEffect, useState } from "react";
const BasketballClub = () => {
      const [ data, setData]=useState({"data":{"id":1,"attributes":{"ClubName":"Loading","ClubSlogan":"Loading","createdAt":"Loading","updatedAt":"Loading","publishedAt":"Loading","Thumbnail_Content":null,"Components":[{"id":1,"Component_name":"Loading","Component_data":"Loading"},{"id":2,"Component_name":"Rules and Guidelines","Component_data":"You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.\nAll outdoor sports like athletics, swimming, cricket, \nYou are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.\nAll outdoor sports like athletics, swimming, cricket, "},{"id":3,"Component_name":"Past Events.","Component_data":"- Inter IIT: The primary goal of every sports club of the IIT (annual event).\n-Basketball Spardha: Inter hostel competition (annual event)\n-Basketball Spirit: Inter college competition (annual event)\n-Friendly Matches : Held at regular intervals against the local clubs."},{"id":4,"Component_name":"Acheivements.","Component_data":"- Won Spirit 2014 (Water Polo)\n- Surabhi Bhargava won multiple medals for three consecutive years(2012-2014) at Inter IIT meets.\n- Kunwar Walia won multiple medals(8 total) in the Inter IIT 2010 and 2011.\n- Indrajit Singh and Soumya Sen won medals in 2006 for IIT Guwahati."}],"Media_Components":[{"id":1,"Heading":"Gallery","Media_Description":"You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor. You are here for an overall development of your personality, so to keep you healthy and fit, we have all the facilities for sports, both indoor and outdoor.\nYou are here for an overall development of your personality, so to."}],"Thumbnail_Image":{"data":null},"Background_Image":{"data":null}}},"meta":{}});
  async function getData (){
    const api = `http://localhost:1337/api/clubs/3?populate=*`;
    const result =await fetch(api);
    const getResult = await result.json();
    setData(getResult);
  }
  useEffect(()=>{
      getData();
  },[])
  console.log(data);
    return ( 
        <div>
        <Navbar name={data.data.attributes.ClubName} slogan={data.data.attributes.ClubSlogan}/>
        <About_us />
        <ClubRnG />
        <PastEvents />
        <Team_members />
        <Facilities /> 
        <Footer />
        </div>
    );
}
 
export default BasketballClub;