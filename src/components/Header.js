import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from "react-router-dom";

export default function Header(){
    const openNav = () => document.body.classList.toggle('nav-open');
    const closeNav = () => document.body.classList.remove('nav-open');

    const navigate = useNavigate();

    return(
        <header>
            <div className="logo" onClick={() => navigate('/')}>
                <img src={require('../images/logo.png')} alt="" />
            </div>
            <button className="nav-toggle" onClick={ openNav } aria-label="toggle-navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item" onClick={ closeNav }><Link to="/#home" className="nav__link">Home</Link></li>
                    <li className="nav__item" onClick={ closeNav }><Link to="/#services" className="nav__link">My Skills</Link></li>
                    <li className="nav__item" onClick={ closeNav }><Link to="/#about" className="nav__link">About Me</Link></li>
                    <li className="nav__item" onClick={ closeNav }><Link to="/#work" className="nav__link">My Work</Link></li>
                </ul>
            </nav>
        </header>
    );
}
