import AquaticsClub from "./pages/aquatics_club";
import BasketballClub from "./pages/basketballClub";
import Spardha from "./pages/spardha";
import ClubPages from "./pages/clubsPages";
import Homepage from "./pages/homepage";
import { Route , Routes} from "react-router-dom";
import Contactus from "./pages/contactus";
import Manthan from "./pages/manthan";
import Interiit from "./pages/interiit";
import Spirit from "./pages/spirit";
function App() {
  return (
    <div className="App">
    <Routes>
          <Route path='/stud/gymkhana/sports/' element={<Homepage />} />
          <Route path='/stud/gymkhana/sports/clubs' element={< ClubPages/>} />
          <Route path='/stud/gymkhana/sports/events'  />
          <Route path='/stud/gymkhana/sports/clubs/basketball' element={<BasketballClub />} />
          <Route path='/stud/gymkhana/sports/clubs/aquatics' element={<AquaticsClub />} />
          <Route path='/stud/gymkhana/sports/contacts' element={<Contactus />} />
          <Route path='/stud/gymkhana/sports/events/spardha' element={<Spardha/>} />
          <Route path='/stud/gymkhana/sports/events/spirit' element={<Spirit/>} />
          <Route path='/stud/gymkhana/sports/events/manthan' element={<Manthan/>} />
          <Route path='/stud/gymkhana/sports/events/Inter-iit' element={<Interiit/>} />
   </Routes>
  
   </div>
  );
}

export default App;
