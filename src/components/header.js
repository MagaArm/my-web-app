import '../css/header.css'
import familyCrest from '../images/Magana-Family-Crest.jpg';
function Header() {

    return (
        <header className="header">
            <div className="header-logo">
                <img alt="logo" className="header-logo" src={familyCrest}></img>
            </div>
            <div className="header-title">
                <h1>My Application</h1>
            </div>
            <nav className='header-items'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about-me">About Me</a></li>
                    <li><a href="/my-family">Family</a></li>
                    <li><a href="/my-hobbies">Hobbies</a></li>
                    <li><a href="/my-profession">Professional</a></li>
                    <li><a href="/navy-career">Military Service</a></li>
                    <li><a href="/subscribe">Subscribe</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;