import AquaticsClub from "./pages/aquatics_club";
import BasketballClub from "./pages/basketballClub";
import ClubPages from "./pages/clubsPages";
import Homepage from "./pages/homepage";
import { Route , Routes} from "react-router-dom";
import Contactus from "./pages/contactus";
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
   </Routes>
  
   </div>
  );
}

export default App;
