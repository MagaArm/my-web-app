import '../css/header.css'

function Header() {

    return (
        <header className="header">
            <nav>
                <ul className='Header-items'>
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