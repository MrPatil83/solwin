import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar"
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import SmartLighting from "./Pages/SmartLighting";
import HomeSequrity from "./Pages/HomeSequrity";
import InteractiveHome from "./Pages/InteractiveHome";
import Multimedia from "./Pages/Multimedia";
import EnergyEfficincy from "./Pages/EnergyEfficincy";
import Protection from "./Pages/Protection";
import Climate from "./Pages/Climate";
import SurveillanceSystem from "./Pages/SurveillanceSystem";

// import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage/>} />
        <Route path="/smartlighting" element={<SmartLighting/>} />
        <Route path="/homesequrity" element={<HomeSequrity/>} />
        <Route path="/interactivehome" element={<InteractiveHome/>} />
        <Route path="/multimedia" element={<Multimedia/>} />
        <Route path="/energyefficincy" element={<EnergyEfficincy/>} />
        <Route path="/protection" element={<Protection/>} />
        <Route path="/climate" element={<Climate/>} />
        <Route path="/surveillancesystem" element={<SurveillanceSystem/>} />
      </Routes>
    </Router>
  );
}

export default App;
