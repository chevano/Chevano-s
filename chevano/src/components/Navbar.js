import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [Mobile, setMobile] = useState(false);

  return (
    <div>
      <nav className='navbar'>
        <h3 className='logo'>Chevano's</h3>
        <ul 
          className={Mobile ? "nav-links-mobile" : "nav-links"} 
          onClick={() => setMobile(false)}
        >
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
          <Link to='/menu' className='menu'>
            <li>Menu</li>
          </Link>
          <Link to='/catering' className='catering'>
            <li>Catering</li>
          </Link>
          <Link to='/contact' className='contact'>
            <li>Contact</li>
          </Link>
        </ul>
        
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </div>
  );
}
export default Navbar;