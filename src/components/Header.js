export default function Header(){
    const openNav = () => document.body.classList.toggle('nav-open');
    const closeNav = () => document.body.classList.remove('nav-open');

    return(
        <header>
            <div className="logo">
                <img src={require('../images/logo.png')} alt="" />
            </div>
            <button className="nav-toggle" onClick={ openNav } aria-label="toggle-navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item" onClick={ closeNav } ><a href="#home" className="nav__link">Home</a></li>
                    <li className="nav__item" onClick={ closeNav }><a href="#services" className="nav__link">My Services</a></li>
                    <li className="nav__item" onClick={ closeNav }><a href="#about" className="nav__link">About Me</a></li>
                    <li className="nav__item" onClick={ closeNav }><a href="#work" className="nav__link">My Work</a></li>
                </ul>
            </nav>
        </header>
    );
}
