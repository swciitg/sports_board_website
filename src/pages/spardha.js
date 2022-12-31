import About_us from "../components/about_us";
import Activities from "../components/activities";
import ClubRnG from "../components/clubRnG";
import Facilities from "../components/facilities";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Team_members from "../components/team_members";
import PastEvents from "../components/pastEvents";
import PastWinners from "../components/pastWinners"
import Eventinfo from "../components/eventsinfo"
const Spardha = () => {
    return ( 
        <div>
        <Navbar 
            name = {Eventinfo[0].name}
            info = {Eventinfo[0].info}
        />
        <About_us />
        <ClubRnG />
        <PastWinners />
        <Facilities /> 
        <Team_members />
        <Footer />
        </div>
    );
}
 
export default Spardha;