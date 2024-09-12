import React from 'react'
// import { Route, Routes} from 'react-router-dom'
// import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Hero from './components/navbar/Hero'
import Cta from './components/cta/Cta'
import Review from './components/reviews/Review'
import HomeProjects from './components/home-projects/HomeProjects'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <HomeProjects />
        <Cta />
        <Review />
      </div>
      <Footer />
    </>
  );
};

export default App;

        // <Routes>
        //   <Route path="/" element={<Home />} />
        // </Routes>
