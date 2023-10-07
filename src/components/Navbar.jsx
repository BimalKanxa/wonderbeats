import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import WBlogo from "../images/WBlogo.png";



function NavBar() {
  const [click, setClick] = useState(false);

  const [modeChange, setModeChange] = useState(true);
  const handleModeClick = () =>{
      if(modeChange){
          document.getElementById("navbar").style.backgroundColor = "#ffffe0";
          setModeChange(false);
      }
      else{
        document.getElementById("navbar").style.backgroundColor = "#e4e4e4";
        setModeChange(true)
      }
  }

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={WBlogo} alt="logo" className="logo"/>
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
         
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-links"
                onClick={handleModeClick}
              >
                 <ion-icon name="contrast-outline"></ion-icon>  
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links nav-contact"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;