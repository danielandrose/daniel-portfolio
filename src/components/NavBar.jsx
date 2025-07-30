import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../cssFiles/navBar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

function NavBar() {
    const [isActive, setIsActive] = useState(false);

    function respond(){
        setIsActive(prev => !prev);
    }
 
    return (
        <nav className="nav-bar nav-back">
            <h2 className="logo nav-back">Daniel</h2>
            <ul className={`nav-list nav-back nav-links ${isActive ? 'mobile-menu' : ''}`}>
                <li className="nav-back"><a className="nav-back" href="#home" onClick={respond}>Home</a></li>
                <li className="nav-back"><a className="nav-back" href="#skills" onClick={respond}>Skills</a></li>

                <li className="nav-back"><a className="nav-back" href="#projects" onClick={respond}>Projects</a></li>
                <li className="nav-back"><a className="nav-back" href="#" onClick={respond}>Experience</a></li>
                <li className="nav-back"><a className="nav-back" href="#" onClick={respond}>Education</a></li>
            </ul>
            <div className='menu'>
            {isActive 
                ? <RxCross1 onClick={respond} className="menu-btn" /> 
                : <GiHamburgerMenu onClick={respond} className="menu-btn" />
            }</div>
        </nav>
    );
}

export default NavBar;
