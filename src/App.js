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
          <Route path='/' element={<Homepage />} />
          <Route path='/clubs' element={< ClubPages/>} />
          <Route path='/events'  />
          <Route path='/clubs/basketball' element={<BasketballClub />} />
          <Route path='/basketball' element={<AquaticsClub />} />
          <Route path='/contacts' element={<Contactus />} />
   </Routes>
  
   </div>
  );
}

export default App;
