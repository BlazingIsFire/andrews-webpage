import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {

  return (
    <>
    <Navbar />
      <div className='homepage-container-web'>
        <Homepage />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    <div className='homepage-container-devices'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
