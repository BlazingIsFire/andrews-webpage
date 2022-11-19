import '../App.css';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import skillsbg from './skills-bg.json';

function Skills() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <div className='skills-container' id='skills'>
            <Particles options={skillsbg} id="skills-particles" init={particlesInit}/>
            <div className='skills-html-container'>
                <h1>Test</h1>
            </div>
        </div>
    );
}

export default Skills;