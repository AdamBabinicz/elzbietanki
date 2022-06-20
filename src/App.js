import React from "react";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Price from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import ScrollToTop from "./ScrollToTop";
import Scroll from "./components/Scroll";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Scroll />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/siostry" element={<About />} />
          <Route path="/meczenniczki" element={<CourseHome />} />
          <Route path="/rysunki" element={<Team />} />
          <Route path="/blogoslawione" element={<Price />} />
          <Route path="/beatyfikacja" element={<Blog />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
