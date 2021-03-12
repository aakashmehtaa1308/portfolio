import { React } from 'react';
import './App.css';
import About from './Components/About';
import Experience from './Components/Experience';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
