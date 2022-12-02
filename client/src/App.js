import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';

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
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
          </Routes>
      </div>
    <div className='homepage-container-devices'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;