import '../App.css';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';

function Homepage() {
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