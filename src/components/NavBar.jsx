import { useState } from 'react';
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
                <li className="nav-back"><Link className="nav-back" to="/" onClick={respond}>Home</Link></li>
                <li className="nav-back"><Link className="nav-back" to="/skills" onClick={respond}>Skills</Link></li>
                <li className="nav-back"><a className="nav-back" href="#" onClick={respond}>Projects</a></li>
                <li className="nav-back"><a className="nav-back" href="#" onClick={respond}>Experience</a></li>
                <li className="nav-back"><a className="nav-back" href="#" onClick={respond}>Education</a></li>
            </ul>
            {isActive 
                ? <RxCross1 onClick={respond} className="menu-btn" /> 
                : <GiHamburgerMenu onClick={respond} className="menu-btn" />
            }
        </nav>
    );
}

export default NavBar;
