import { useState } from 'react';
import '../css/NavBar.css'
import VOCimg from '../assets/LOGO.svg';

function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='sizing'>
            <div>
                <a href="#">
                    <img src={VOCimg} alt="VOC" />
                </a>
            </div>

            <ul className={isMenuOpen ? "active" : ""}>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#works'>Works</a></li>
                <li>
                    <div className="button"><a href='#contact'>Contact</a></div>
                </li>
            </ul>

            <div className="nav-icon" onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}

export default NavBar