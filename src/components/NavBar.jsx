import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../cssFiles/navBar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

function NavBar() {
    const [isActive, setIsActive] = useState(false);

    function toggleMenu() {
        setIsActive(prev => !prev);
    }

    return (
        <nav className="nav-bar nav-back">
            <h2 className="logo nav-back">Daniel</h2>
            <ul className={`nav-list nav-back nav-links ${isActive ? 'mobile-menu' : ''}`}>
                <li className="nav-back"><Link className="nav-back" to="/">Home</Link></li>
                <li className="nav-back"><Link className="nav-back" to="/skills">Skills</Link></li>
                <li className="nav-back"><a className="nav-back" href="#">Projects</a></li>
                <li className="nav-back"><a className="nav-back" href="#">Experience</a></li>
                <li className="nav-back"><a className="nav-back" href="#">Education</a></li>
            </ul>
            {/* Toggle between hamburger and close icons */}
            {isActive ? (
                <RxCross1 className="menu-btn" onClick={toggleMenu} />
            ) : (
                <GiHamburgerMenu className="menu-btn" onClick={toggleMenu} />
            )}
        </nav>
    );
}

export default NavBar;
