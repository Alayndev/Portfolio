import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "../../pages/home/HomePage";
import { AboutPage } from "../../pages/about/AboutPage";
import { PortfolioPage } from "../../pages/portfolio/PortfolioPage";
import { SkillsPage } from "../../pages/skills/SkillsPage";
import { ContactPage } from "../../pages/contact/ContactPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route path="/about" element={<AboutPage />}></Route>

          <Route path="/portfolio" element={<PortfolioPage />}></Route>

          <Route path="/skills" element={<SkillsPage />}></Route>

          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
