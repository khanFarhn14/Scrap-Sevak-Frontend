import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Aos from "aos";
import 'aos/dist/aos.css';
import "./assets/css/remixicon.css"
import Home from './View/Home/home';
import About from './View/About/about-us';
import Contact from './View/Contact/contact-us';
import Header from './View/_Common/Header';
import Footer from './View/_Common/Footer';

export default function App() {
   useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
        });
    }, []);
  return (
    <React.Fragment>
      <Router>
        <Header />
        <div className="main-app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </React.Fragment>
  );
}
