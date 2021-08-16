
function HeaderGuest() {
    
    return (
        <div className="header.header-scrolled">
            <header id="header" className="fixed-top header-inner-pages">
                <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><a href="/">Joseph W Borders</a></h1>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="/">Home</a></li>
                        <li><a className="nav-link scrollto" href="/tutorial">Tutorial</a></li>
                        <li><a className="nav-link scrollto" href="/faq">FAQ</a></li>
                        <li className="dropdown"><a href=""><span>Personal Life</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="/family">Family Life</a></li>
                                <li className="dropdown"><a href=""><span>Interests</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="/reading">Reading</a></li>
                                        <li><a href="/cooking">Cooking</a></li>
                                        <li><a href="/diy">DIY Projects</a></li>
                                        <li><a href="/travel">Travel</a></li>
                                        <li><a href="/investing">Investing</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="/contact">Contact</a></li>
                        <li><a className="getstarted scrollto" href="/register">Get Started</a></li>
                        <li><a className="getstarted scrollto" href="/login">Sign In</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                </div>
            </header>
        </div>
    );
}
export default HeaderGuest;