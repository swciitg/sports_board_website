import Clubs from "../components/clubs";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import info from "../components/info"
import Animation from "../components/animation";
import Clubone from "../components/clubone";
import { useEffect, useState } from "react";

const ClubPages = () => {
 
   return (
       <div>
           {/* <Navbar
            name = {info[1].name}
            info = {info[1].info}
          />
           <Animation/> 
          <Footer/>  */}
         <Clubone></Clubone>

       </div>


        );  

}
export default ClubPages;
