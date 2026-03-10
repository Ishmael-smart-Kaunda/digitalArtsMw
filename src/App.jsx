import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Team from "./pages/Team";
import Layout from "./Layout";

import Sketching from "./pages/dynamic sketching";
import Modelling from "./pages/3D modelling";
import GameDevelopment from "./pages/Game development";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<Contact />} />
         
          <Route path="/sketching" element={<Sketching/>} />
          <Route path="/modelling" element={<Modelling/>} />
          <Route path="/gameDevelopment" element={<GameDevelopment/>} />
        </Route>
      </Routes>
    </Router>
  )
}