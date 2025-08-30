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
import PortfolioSection from "./pages/home/PortfolioSection";
import ContactSection from "./pages/home/ContactSection";
import NotFound from "./pages/NotFound"

//App - 단일 라우팅 페이지로 사용
function App() {
  return (
    <Router basename="/port-react">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeSection />} />
            <Route path="skill" element={<SkillSection />} />
            <Route path="project" element={<ProjectSection />} />
            <Route path="portfolio" element={<PortfolioSection />} />
            <Route path="contact" element={<ContactSection />} />
          </Route>
        </Route>
        {/* 404 */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
