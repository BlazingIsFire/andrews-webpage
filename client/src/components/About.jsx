import '../App.css';

function About() {
    return(
        <>
        <div className='about-container' id='about'>
            <h2 class='about-title'>A little bit about me...</h2>
            <p>Hi, my name is Andrew! I'm 20 years old, and I have <a href='https://www.crohnscolitisfoundation.org/what-is-crohns-disease' target="_blank" style={{color: '#a61bee'}}>Crohn's Disease</a>. Ever since I was 12 years old I have had an interest in technology, software engineering, cybersecurity, firefighting, and cars. I currently work for the Department of Defense and hold a Senior IT Specialist position. I am always looking to learn and improve myself.</p>
        </div>
        <div className='about-ending-container' />
        </>
    )
}

export default About;