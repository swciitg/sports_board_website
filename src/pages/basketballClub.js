import About_us from "../components/about_us";
import Activities from "../components/activities";
import ClubRnG from "../components/clubRnG";
import Facilities from "../components/facilities";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Team_members from "../components/team_members";
import PastEvents from "../components/pastEvents";
const BasketballClub = () => {
    return ( 
        <div>
        <Navbar  />
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