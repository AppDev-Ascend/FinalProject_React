import '../App.css';
import { Link } from 'react-router-dom';

export function Header({ currentUser }) {
 
  if(currentUser) {
    return (
      <div>
        <nav className="nav-container">
          <div className="navbar-div-left"> 
            <a href="../index.html" className="web-logo"><div className="nav-element"><img src="/assets/images/BRAND_LOGO.png" height="40" alt="logo"/></div></a>
            <a href="../index.html" className="nav-interactable"><div className="nav-element"> Pricing </div></a>
            <a href="../index.html" className="nav-interactable"><div className="nav-element"> About Us </div></a>
          </div>
          <div className="navbar-div-right">
            <a href="../index.html" className="nav-interactable"><div className="nav-element"> Sign Out </div></a>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav className="nav-container">
          <div className="navbar-div-left"> 
            <a href="../index.html" className="web-logo"><div className="nav-element"><img src="/assets/images/BRAND_LOGO.png" height="40" alt="logo"/></div></a>
            <a href="../index.html" className="nav-interactable"><div className="nav-element"> Pricing </div></a>
            <a href="../index.html" className="nav-interactable"><div className="nav-element"> About Us </div></a>
          </div>
          <div className="navbar-div-right">
            <Link to="/login-registration" className="nav-interactable"><div className="nav-element"> Sign In </div></Link>
          </div>
        </nav>
      </div>
    );
  }
  
  
}

export default Header;