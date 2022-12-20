import Navbar from "./components/navbar";
import AquaticsClub from "./pages/aquatics_club";
import BasketballClub from "./pages/basketballClub";
import Homepage from "./pages/homepage";
import { Route , Routes} from "react-router-dom";
function App() {
  return (
   <div className="App">
      <Routes>
        <Route  path="/" element={<Homepage />} />
        <Route   path="/clubs" element={<AquaticsClub />} />
        <Route   path="/events" element={<BasketballClub />} />
      

      
     
      </Routes>
    </div>

  );
}

export default App;
