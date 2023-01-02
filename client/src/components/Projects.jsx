import '../App.css';
import { ReactComponent as FolderSVG } from '../images/folder.svg';
import { ReactComponent as GithubLogo } from '../images/github.svg';

function Projects() {
    return(
        <>
        <div className='projects-container-web' id='projects'>
            <h1 className='projects-title'>Noteworthy Projects:</h1>
            <div className='projects-panel-container'>
            <div className='projects-panel'>
                    <div className='projects-panel-head'>
                        <FolderSVG id='projects-folder'/>
                        <div id='projects-head-end'>
                            <a href='https://github.com/BlazingIsFire/noteboard' target='_blank' rel='noreferrer'>
                                <GithubLogo id='projects-github' title='Github'/>
                            </a>
                        </div>
                    </div>
                    <div className='projects-panel-content'>
                        <h2>Noteboard App</h2>
                        <p>A simple noteboard application that allows you to create notes and reminders of daily activities.</p>
                        <a href='https://noteboard.andrewschweitzer.tech' target='_blank' rel='noreferrer'>Live Demo</a>
                    </div>
                    <div className='projects-panel-endtags'>
                        <h4>React</h4>
                        <h4>Firebase</h4>
                        <h4>Javascript</h4>
                    </div>
                </div>
                <div className='projects-panel'>
                    <div className='projects-panel-head'>
                        <FolderSVG id='projects-folder'/>
                        <div id='projects-head-end'>
                            <a href='https://github.com/BlazingIsFire/react_trello' target='_blank' rel='noreferrer'>
                                <GithubLogo id='projects-github' title='Github'/>
                            </a>
                        </div>
                    </div>
                    <div className='projects-panel-content'>
                        <h2>Trello Clone</h2>
                        <p>A lightweight Trello Clone with no backend. All data is stored using states and context.</p>
                        <a href='https://blazingisfire.github.io/react_trello/' target='_blank' rel='noreferrer'>Live Demo</a>
                    </div>
                    <div className='projects-panel-endtags'>
                        <h4>React</h4>
                        <h4>JSX</h4>
                        <h4>Javascript</h4>
                    </div>
                </div>
                <div className='projects-panel'>
                    <div className='projects-panel-head'>
                        <FolderSVG id='projects-folder'/>
                        <div id='projects-head-end'>
                            <a href='https://github.com/BlazingIsFire/calculator-app' target='_blank' rel='noreferrer'>
                                <GithubLogo id='projects-github' title='Github'/>
                            </a>
                        </div>
                    </div>
                    <div className='projects-panel-content'>
                        <h2>Calculator App</h2>
                        <p>A simple web-based calculator application I created to help build upon my skills and learn the DOM.</p>
                        <a href='https://blazingisfire.github.io/calculator-app/' target='_blank' rel='noreferrer'>Live Demo</a>
                    </div>
                    <div className='projects-panel-endtags'>
                        <h4>HTML</h4>
                        <h4>CSS</h4>
                        <h4>Javascript</h4>
                    </div>
                </div>
            </div>
        </div>
        {/* Start of projects section on mobile */}
        <div className='projects-container-mobile'>
            <h1 className='projects-title'>Noteworthy Projects:</h1>
                <div className='projects-panel-container'>
                <div className='projects-panel'>
                        <div className='projects-panel-head'>
                            <FolderSVG id='projects-folder'/>
                            <div id='projects-head-end'>
                                <a href='https://github.com/BlazingIsFire/noteboard' target='_blank' rel='noreferrer'>
                                    <GithubLogo id='projects-github' title='Github'/>
                                </a>
                            </div>
                        </div>
                        <div className='projects-panel-content'>
                            <h2>Noteboard App</h2>
                            <p>A simple noteboard application that allows you to create notes and reminders of daily activities.</p>
                            <a href='https://noteboard.andrewschweitzer.tech' target='_blank' rel='noreferrer'>Live Demo</a>
                        </div>
                        <div className='projects-panel-endtags'>
                            <h4>React</h4>
                            <h4>Firebase</h4>
                            <h4>Javascript</h4>
                        </div>
                    </div>
                    <div className='projects-panel'>
                        <div className='projects-panel-head'>
                            <FolderSVG id='projects-folder'/>
                            <div id='projects-head-end'>
                                <a href='https://github.com/BlazingIsFire/react_trello' target='_blank' rel='noreferrer'>
                                    <GithubLogo id='projects-github' title='Github'/>
                                </a>
                            </div>
                        </div>
                        <div className='projects-panel-content'>
                            <h2>Trello Clone</h2>
                            <p>A lightweight Trello Clone with no backend. All data is stored using states and context.</p>
                            <a href='https://blazingisfire.github.io/react_trello/' target='_blank' rel='noreferrer'>Live Demo</a>
                        </div>
                        <div className='projects-panel-endtags'>
                            <h4>React</h4>
                            <h4>JSX</h4>
                            <h4>Javascript</h4>
                        </div>
                    </div>
                    <div className='projects-panel'>
                        <div className='projects-panel-head'>
                            <FolderSVG id='projects-folder'/>
                            <div id='projects-head-end'>
                                <a href='https://github.com/BlazingIsFire/calculator-app' target='_blank' rel='noreferrer'>
                                    <GithubLogo id='projects-github' title='Github'/>
                                </a>
                            </div>
                        </div>
                        <div className='projects-panel-content'>
                            <h2>Calculator App</h2>
                            <p>A simple web-based calculator application I created to help build upon my skills and learn the DOM.</p>
                            <a href='https://blazingisfire.github.io/calculator-app/' target='_blank' rel='noreferrer'>Live Demo</a>
                        </div>
                        <div className='projects-panel-endtags'>
                            <h4>HTML</h4>
                            <h4>CSS</h4>
                            <h4>Javascript</h4>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Projects;