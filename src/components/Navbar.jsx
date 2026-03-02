import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

function Navbar(){
    const location = useLocation();

    return (
        <nav className="nav-container">
            <div className="logo-text">OpenLLM-Chat</div>
            <ul className="nav-links">
                <li>
                    <Link className={location.pathname === '/' ? 'active' : ''} to='/' >Home</Link>
                </li>
                <li>
                    <Link className={location.pathname === '/settings' ? 'active' : ''} to='/settings'>Settings</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
