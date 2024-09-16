import React from "react";
// import { Route, Routes} from 'react-router-dom'
// import Home from './pages/home/Home'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/navbar/Hero";
import Cta from "./components/cta/Cta";
import Reviews from "./components/reviews/Reviews";
import HomeProjects from "./components/home-projects/HomeProjects";
import Slider from "./components/slider-image/Slider";
import Loop from "./components/loop/Loop";
import Domain from "./components/domains/Domain";
import CompanyValues from "./components/company-values/CompanyValues";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Domain />
        <HomeProjects />
        <Loop />
        <Slider />
        <CompanyValues />
        <Reviews />
        <Cta />
      </div>
      <Footer />
    </>
  );
};

export default App;

// <Routes>
//   <Route path="/" element={<Home />} />
// </Routes>
