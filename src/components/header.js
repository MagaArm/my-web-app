import '../css/header.css'
import familyCrest from '../images/Logo.png';

function Header() {

    return (
        <header className="header">
            <div className="header-logo">
                <img alt="logo" className="header-logo" src={familyCrest}></img>
            </div>
            <nav className='header-items'>
                <ul>
                    <li><a href="/my-web-app/#home">Home</a></li>
                    <li><a href="/my-web-app/#about-me">About Me</a></li>
                    <li><a href="/my-web-app/#my-family">Family</a></li>
                    <li><a href="/my-web-app/#my-hobbies">Hobbies</a></li>
                    <li><a href="/my-web-app/#my-profession">Professional</a></li>
                    <li><a href="/my-web-app/#navy-career">Military Service</a></li>
                    <li><a href="/my-web-app/#subscribe">Subscribe</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;