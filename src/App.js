// App.js

import React from "react";
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navbar";

function App() {
 

  return (
    <div className="App">
    
      <Navbar />
<div className="App__main_content">
  
<Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        <Route index path="/skills" element={<Skills />} />
        <Route index path="/resume" element={<Resume />} />
        <Route index path="/portfolio" element={<Portfolio />} />
        <Route index path="/contact" element={<Contact />} />
      </Routes>
</div>
    </div>
  );
}

export default App;
