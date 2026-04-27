import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Team from "./pages/Team";
import Layout from "./Layout";

{/*visual development pages */}
import Sketching from "./pages/dynamic sketching";
import CharacterDesign from "./pages/character design";
import DigitalPortrait from "./pages/digital portrait";
{/*3D  pages */}
import Modelling from "./pages/3D modelling";

{/*game development pages */}
import GameDevelopment from "./pages/Game development";
import GobotGames from "./pages/gobot game dev";
import UnityGames from "./pages/unity games";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />} >
           {/*regular pages */}
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<Contact />} />

           {/*course preview pages*/}
           {/*Visual development courses */}
          <Route path="/sketching" element={<Sketching/>} />
          <Route path="/character-design" element={<CharacterDesign/>} />
          <Route path="/digital-portrait" element={<DigitalPortrait/>} />
          
          {/*game development courses */}
          <Route path="/game-development" element={<GameDevelopment/>} />
          <Route path="/gobot-development" element={<GobotGames/>} />
          <Route path="/unity-development" element={<UnityGames/>} />

        </Route>
      </Routes>
    </Router>
  )
}