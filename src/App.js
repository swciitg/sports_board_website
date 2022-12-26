<<<<<<< HEAD

=======
>>>>>>> 12a4cef84691866e042df63dc203a2329371cba6
import AquaticsClub from "./pages/aquatics_club";
import BasketballClub from "./pages/basketballClub";
import ClubPages from "./pages/clubsPages";
import Homepage from "./pages/homepage";
<<<<<<< HEAD
import { Route , Routes} from "react-router-dom";
import Contactus from "./pages/contactus";
function App() {
  return (



    
   <div className="App">
     <Routes>
   <Route   path='/' element={<Homepage />} />
        <Route   path='/clubs' element={< ClubPages/>} />
        <Route   path='/contacts' element={<Contactus />} />
=======
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/clubs' element={< ClubPages/>} />
          <Route path='/events'  />
>>>>>>> 12a4cef84691866e042df63dc203a2329371cba6
          <Route path='/clubs/basketball' element={<BasketballClub />} />
          <Route path='/basketball' element={<AquaticsClub />} />
   </Routes>
  
   </div>
  );
}

export default App;
