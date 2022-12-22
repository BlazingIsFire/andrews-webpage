import '../App.css';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import { useEffect } from 'react';

function Homepage() {
    
    useEffect(() =>{
        document.title = 'Andrew Schweitzer | Portfolio'
    }, [])

    return(
        <>
        <Home />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
        </>
    )
}

export default Homepage;