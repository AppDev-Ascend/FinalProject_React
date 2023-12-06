import '../App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Header({ currentUser, setCurrentUser, client }) {

  const navigate = useNavigate();

  const SubmitLogout = async () => {

    localStorage.removeItem('currentUser');

    try {
      await client.post('/logout');
      setCurrentUser(null);
      navigate('/', currentUser={currentUser});
    } catch (error) {
      console.error('Error during logout:', error);
    }

  };
 
  if(currentUser) {
    return (
      <div>
        <nav className="nav-container">
          <div className="navbar-div-left"> 
            <Link to="/" className="web-logo"><div className="nav-element"><img src="/assets/images/BRAND_LOGO.png" height="40" alt="logo"/></div></Link>
            <a href="../index.html" className="nav-interactable"><div className="nav-element"> Pricing </div></a>
            <a href="../index.html" className="nav-interactable"><div className="nav-element"> About Us </div></a>
          </div>
          <div className="navbar-div-right">
            <button onClick={SubmitLogout}>Logout</button>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav className="nav-container">
          <div className="navbar-div-left"> 
            <Link to="/" className="web-logo"><div className="nav-element"><img src="/assets/images/BRAND_LOGO.png" height="40" alt="logo"/></div></Link>
            <a href="../index.html" className="nav-interactable"><div className="nav-element"> Pricing </div></a>
            <a href="../index.html" className="nav-interactable"><div className="nav-element"> About Us </div></a>
          </div>
          <div className="navbar-div-right">
            <Link to="/" className="nav-interactable"><div className="nav-element"> Sign In </div></Link>
          </div>
        </nav>
      </div>
    );
  }
  
  
}

export default Header;