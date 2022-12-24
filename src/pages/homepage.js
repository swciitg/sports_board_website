import Navbar from "../components/navbar";
import About_us from "../components/about_us";
import Facilities from "../components/facilities";
import Team_members from "../components/team_members";
import Footer from "../components/Footer";
import Event from "../components/event";

function pages() {
  return (
    <div className="App">
      <Navbar />
      <About_us />
      
      <Facilities />
      <Team_members />
       <Event></Event>
      <Footer />
    </div>
  );
}

export default pages;
