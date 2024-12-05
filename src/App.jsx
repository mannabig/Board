import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./content/Homepage";
import Servicepage from "./component/Servicepage";
import Aboutpage from "./component/Aboutpage";
import Project from "./component/Project";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Ourwork from "./component/Ourwork";

const App = () => {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<Aboutpage />} />
          <Route path="/:id" element={<Servicepage />} />
          <Route path="/Works" element={<Ourwork />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
