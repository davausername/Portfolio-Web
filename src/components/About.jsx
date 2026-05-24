import profilPhoto from '../assets/olaf.webp';

function About(){
    return (
        <div className="about sizing" id='about'>
            <div className='profile'>
                <img src={profilPhoto} alt="Profil Photo" />
            </div>
            <div>
                <h2 className='text-[2.586rem] mb-6!'>About Me</h2>
                <p className='mb-10!'>I’m a Noob Front-End Developer who bridges the gap between design and code. I don't just build websites; I craft digital experiences that are snappy, intuitive, and accessible. Beyond the UI, I also capable of bringing a unique edge to the table with my ability to handle and manage complex data through Python and its libraries.</p>
                <div className="learn-more text-[1.616rem]"><a href="#">Learn More</a></div>
            </div>
        </div>
    )
}

export default About