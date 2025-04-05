import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './pages/Home.jsx';
import AboutApplicant from './pages/AboutApplicant.jsx'
import AboutSite from './pages/AboutSite.jsx'
import Footer from './Footer.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-applicant" element={<AboutApplicant />} />
          <Route path="/about-site" element={<AboutSite />} />

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

export default App;
