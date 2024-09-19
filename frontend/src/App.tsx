import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/not-found/NotFound";
import Careers from "./pages/Careers/Careers";
import Projects from "./pages/projects/Projects";
import ProjectShow from "./pages/projects/ProjectShow";
import Copyright from "./components/copyright/Copyright";
import ContactUs from "./pages/ContactUs/ContactUs";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/copyright" element={<Copyright />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectShow />} />
          <Route path="/getintouch" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
