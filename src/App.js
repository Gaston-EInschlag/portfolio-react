import React from "react";
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import Hero from "./components/Hero/Hero.jsx";
import Contact from "./components/Contact/Contact.jsx"
import AboutMe from "./components/AboutMe/AboutMe.jsx";


function App() {
  return (
    
      
      
      <Routes>
      <Route path="*" element= { <Hero /> } /> 
      
      <Route path = "/AboutMe" element = {<AboutMe />} />

      <Route path ="/Contact" element = {<Contact />} />
      </Routes>
    
      
  );
}

export default App;
