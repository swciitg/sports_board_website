import About_us from "../components/about_us";
import ClubRnG from "../components/clubRnG";
import Facilities from "../components/facilities";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import PastEvents from "../components/pastEvents";
import Team_members from "../components/team_members";

const AquaticsClub = () => {
    return (
      <div>
        <Navbar />
        <About_us />
        <ClubRnG />
        <PastEvents />
        <Team_members />
        <Facilities />
        <Footer />
       </div> 
    );
}
 
export default AquaticsClub;