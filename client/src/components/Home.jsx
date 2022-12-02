import { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import '../App.css';
import myAvatar from '../images/avataaars.png';

function Home() {
    const subtitleText = ['Software Engineer', 'Developer', 'Cyber Security Analyst', 'DoD Employee', 'Firefighter'];
    const [subtitleIndex, setSubtitleIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => 
        setSubtitleIndex(subtitleIndex => subtitleIndex +1),
        3000
      );
      return () => clearTimeout(intervalId)
    }, []);

    return(
        <div className='homepage-container' id='home'>
            <div className='homepage-leftblock'>
                <h4 className='homepage-introduction'>Hi, my name is</h4>
                <h1 className='homepage-title'>Andrew Schweitzer</h1>
                <div className='homepage-subtitle-container'>
                <h3 className='homepage-subtitle'>I'm a</h3>
                <TextTransition className='homepage-subtitle homepage-subtitle-texts' springConfig={presets.gentle}>{subtitleText[subtitleIndex % subtitleText.length]}</TextTransition>
                </div>
            </div>
            <div className='homepage-rightblock'>
                <img src={myAvatar} className='homepage-image' alt='Homepage Andrews Avatar'/>
            </div>    
        </div>
    )
}

export default Home;