import '../css/Navbar.css'
import '../javascript/Navbar'
const Navbar = () => {
  return (
    <div>
         <header className="header">
        <img src="images/logo.png" alt="Logo" className="logo" />
        <nav className="navbar">
            <ul className="navbar-list">
                <li><a href="#" className="navbar-link">Home</a></li>
                <li><a href="#" className="navbar-link">About</a></li>
                <li><a href="#" className="navbar-link">Services</a></li>
                <li><a href="#" className="navbar-link">Gallary</a></li>
                <li><a href="#" className="navbar-link">Contact</a></li>
            </ul>

        </nav>

        <div className="mobile-navbar-btn" id='mobile-navbar-btn'>
            <ion-icon name="menu-outline" className="mobile-nav-icon" ></ion-icon>
            <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
        </div>

    </header>
    </div>
  )
}

export default Navbar