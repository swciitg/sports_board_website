import Navbar from "../components/navbar";
import About_us from "../components/about_us";
import Facilities from "../components/facilities";
import Team_members from "../components/team_members";
import Footer from "../components/Footer";
import Event from "../components/event";
import info from "../components/info"
import Eventone from "../components/event1";
function pages() {
   
  return(
    <div className="App">
      <Navbar 
        name = {info[0].name}
        info = {info[0].info}
      />
      <About_us />
      <Eventone />  
      <Facilities />
      <Team_members />
      <Footer />
    </div>
  );
}

export default pages;
