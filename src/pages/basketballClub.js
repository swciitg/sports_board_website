import About_us from "../components/about_us";
import ClubRnG from "../components/clubRnG";
import Facilities from "../components/facilities";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Team_members from "../components/team_members";
const BasketballClub = () => {
    return ( 
        <div>
        <Navbar />
        <About_us />
        <ClubRnG />
        <Team_members />
        <Facilities /> 
        <Footer />
        </div>
    );
}
 
export default BasketballClub;