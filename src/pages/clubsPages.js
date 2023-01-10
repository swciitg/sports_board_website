import Clubs from "../components/clubs";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import info from "../components/info"




const ClubPages = () => {
   return (
       <div>
          <Navbar
            name = {info[1].name}
            info = {info[1].info}
          />
          <Clubs/>
          <Footer/>


       </div>


        );  

}
export default ClubPages;
