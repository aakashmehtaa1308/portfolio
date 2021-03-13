import { React } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Navbar from './Components/Navbar';
import Project from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
