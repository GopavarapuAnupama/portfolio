import React from "react";
import './App.css';



import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Project.js';
import ContactMe from './components/ContactMe.js';
import Education from './components/Education.js';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Education/>
      <ContactMe />
      
    </div>
  );
};

export default App;

