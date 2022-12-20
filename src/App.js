import Navbar from "./components/navbar";
import AquaticsClub from "./pages/aquatics_club";
import BasketballClub from "./pages/basketballClub";
import ClubPages from "./pages/clubsPages";
import Homepage from "./pages/homepage";
import { Route , Routes} from "react-router-dom";
function App() {
  return (
   <div className="App">
      <ClubPages/>
    </div>

  );
}

export default App;
