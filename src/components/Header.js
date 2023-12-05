import { useEffect, useState } from "react";
import './App.css';
 
export function Header(currentUser) {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <div>
      <nav class="nav-container">
        <div class="navbar-div-left"> 
          <a href="../index.html" class="web-logo"><div class="nav-element"><img src="../media/BRAND_LOGO.png" height="40" alt="logo"/></div></a>
          <a href="../index.html" class="nav-interactable"><div class="nav-element"> Pricing </div></a>
          <a href="../index.html" class="nav-interactable"><div class="nav-element"> About Us </div></a>
        </div>
        <div class="navbar-div-right">
          <a href="../index.html" class="nav-interactable"><div class="nav-element"> Sign In </div></a>
        </div>
      </nav>
    </div>
  );
  
}

export default Header;