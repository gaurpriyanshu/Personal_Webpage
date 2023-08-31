import React from 'react';
import Navbar from './Navbar';
import './CSS Files/App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Work from './Work';




function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Work />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;