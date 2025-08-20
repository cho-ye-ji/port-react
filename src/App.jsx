import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./components/layouts/DefaultLayout";

import "./styles/main.scss";
import "./App.css";

//style
import "./styles/main.scss";

import ProjectSection from "./pages/home/ProjectSection";
import HomeSection from "./pages/home/HomeSection";
import SkillSection from "./pages/home/SkillSection";

function App() {
  return (
    <Router basename="/port-react">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeSection />} />
            <Route path="skill" element={<SkillSection />} />
            <Route path="project" element={<ProjectSection />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
