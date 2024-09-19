import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Cta from "./components/cta/Cta";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/not-found/NotFound";
import Careers from "./pages/Careers/Careers";
import Projects from './pages/projects/Projects';
import ProjectShow from './pages/projects/ProjectShow';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectShow />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Cta />
      </div>
      <Footer />
    </>
  );
};

export default App;
