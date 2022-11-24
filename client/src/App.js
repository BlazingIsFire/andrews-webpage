import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';

function App() {

  return (
    <>
    <Navbar />
      <div className='homepage-container-web'>
          <Routes>
              <Route>
                <Route path='/' element={<Homepage />}/>
              </Route>
              <Route path='/contact' element={<Contact />}/>
          </Routes>
      </div>
    <div className='homepage-container-devices'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<ContactMe />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;

// <Homepage />
//           <About />
//           <Skills />
//           <Projects />
//           <ContactMe />