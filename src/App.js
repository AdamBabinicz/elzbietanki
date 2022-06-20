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
import CookieConsent from "react-cookie-consent";

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
        <CookieConsent
          debug={true}
          location="bottom"
          style={{
            background: "#333",
            textAlign: "left",
            paddingBottom: "1rem",
            fontSize: "16px",
            fontFamily: "Gideon Roman",
          }}
          buttonStyle={{
            color: "#333",
            background: "#fff",
            fontSize: "18px",
            fontFamily: "Gideon Roman",
            marginRight: "1rem",
          }}
          buttonText="OK, rozumiem"
          expires={365}
        >
          "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
          Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
          indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
          dotyczących cookies oznacza, że będą one zamieszczane w Państwa
          urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
          ustawień dotyczących cookies."
        </CookieConsent>
      </Router>
    </>
  );
};

export default App;
