export default function Footer(){
    return(
        <footer className="footer">
            <a href="mailto:kojocaru.ivan@gmail.com" className="footer__link">kojocaru.ivan@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://facebook.com">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://linkedin.com">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://instagram.com">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}