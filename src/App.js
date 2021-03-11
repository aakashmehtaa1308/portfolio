import { React } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
    </div>
  );
}

export default App;
