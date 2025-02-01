import { Link } from "react-router-dom"
function NavBar() {
    return (
        <nav className="nav-bar nav-back">
            <h2 className='logo nav-back'>Daniel</h2>
            <ul className="nav-list nav-back">
                <li className="nav-back"><Link className="nav-back" to="/">Home</Link></li>
                <li className="nav-back"><Link className="nav-back" to="/skills">Skills</Link></li>
                <li className="nav-back"><a className="nav-back" href="#">Projects</a></li>
                <li className="nav-back"><a className="nav-back" href="#">Experience</a></li>
                <li className="nav-back"><a className="nav-back" href="#">Education</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;