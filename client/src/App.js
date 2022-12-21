import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <>
    <AuthProvider>
      <Navbar />
      <div className='homepage-container-web'>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Homepage />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />}/>
          <Route path='*' element={<p>No path resolved!</p>} />
          {/* Private/Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path='dashboard' element={<Dashboard/>}/> {/*TODO: Fix React warning of "/dashboard" not a route*/}
          </Route>
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
    </AuthProvider>
    
    </>
  );
}

export default App;