import React from 'react';
import '../App.css';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import skillsbg from './skills-bg.json';
import HtmlLogo from '../images/html.png';
import CSS3Logo from '../images/css3.png';
import GitLogo from '../images/git.png';
import ReactLogo from '../images/react.png';
import JsLogo from '../images/javascript.png';
import NodeJsLogo from '../images/node-js.png';
import AwsLogo from '../images/amazon-aws.png';
import LinuxLogo from '../images/linux.png';

function Skills() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <div className='skills-container' id='skills'>
            <Particles options={skillsbg} id="skills-particles" init={particlesInit}/>
            <div className='skills-objects-container'>
                <div className='skills-objects-top'>
                    <div className='skills-large-container' id='html-container'>
                        <img src={HtmlLogo} alt='HTML5 Logo' className='skills-logo'/>
                        <div className='progress'>
                            <div className='progress-bar' id='html-data-set'>
                                <span>75%</span>
                            </div>
                        </div>
                    </div>
                    <div className='skills-large-container' id='css-container'>
                        <img src={CSS3Logo} alt='CSS5 Logo' className='skills-logo'/>
                        <div className='progress'>
                            <div className='progress-bar' id='css-data-set'>
                                <span>65%</span>
                            </div>
                        </div>
                    </div>
                    <div className='skills-large-container' id='git-container'>
                        <img src={GitLogo} alt='Git Logo' className='skills-logo'/>
                        <div className='progress'>
                            <div className='progress-bar' id='git-data-set'>
                                <span>60%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='skills-objects-middle'>
                    <div className='skills-large-container' id='react-container'>
                        <img src={ReactLogo} alt='ReactJS Logo' className='skills-logo'/>
                        <div className='progress'>
                            <div className='progress-bar' id='react-data-set'>
                                <span>77%</span>
                            </div>
                        </div>
                    </div>
                    <div className='skills-large-container' id='js-container'>
                        <img src={JsLogo} alt='JavaScript Logo' className='skills-logo'/>
                        <div className='progress'>
                            <div className='progress-bar' id='js-data-set'>
                                <span>85%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='skills-objects-end'>
                    <div className='skills-large-container' id='node-container'>
                        <img src={NodeJsLogo} alt='NodeJS Logo' className='skills-logo'/>
                        <div className='progress'>
                            <div className='progress-bar' id='node-data-set'>
                                <span>35%</span>
                            </div>
                        </div>
                    </div>
                    <div className='skills-large-container' id='aws-container'>
                        <img src={AwsLogo} alt='AWS Logo' className='skills-logo'/>
                        <div className='progress'>
                            <div className='progress-bar' id='aws-data-set'>
                                <span>45%</span>
                            </div>
                        </div>
                    </div>
                    <div className='skills-large-container' id='linux-container'>
                        <img src={LinuxLogo} alt='Linux Logo' className='skills-logo'/>
                        <div className='progress'>
                            <div className='progress-bar' id='linux-data-set'>
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;