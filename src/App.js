import { React } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Navbar from './Components/Navbar';
import Project from './Components/Projects';
import Skills from './Components/Skills';
import { Layout } from 'antd';
import FooterCom from './Components/Footer';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Content>
        <About />
        <Experience />
        <Skills />
        <Project />
        <Contact />
      </Content>
      <Footer style={{ backgroundColor: 'black' }}>
        <FooterCom />
      </Footer>
    </div>
  );
}

export default App;
