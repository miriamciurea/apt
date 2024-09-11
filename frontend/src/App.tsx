import React from 'react'
// import { Route, Routes} from 'react-router-dom'
// import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Hero from './components/navbar/Hero'
import Review from './components/reviews/Review'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container"></div>
      <Review />
      <Footer />
    </>
  );
};

export default App;

        // <Routes>
        //   <Route path="/" element={<Home />} />
        // </Routes>
