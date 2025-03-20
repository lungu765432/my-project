import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../src/components/footer/footer";
import NavBar from "../src/components/navbar/navbar";
import Home from "../src/home/home";
import About from "../src/about/about";
import Contacts from "../src/contacts/contacts";
import Elements from "../src/elements/elements";
import Facade from "../src/facade/facade";
import Panels from "../src/panels/panels";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/facade" element={<Facade />} />
        <Route path="/panels" element={<Panels />} />
      </Routes>
    </Router>
  );
}
