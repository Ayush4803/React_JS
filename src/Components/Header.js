import { useState } from 'react';
import { LOGO } from '../../utils/constant';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="Header">
      <div className="LogoContainer">
        <img className="logo" src={LOGO} alt="logo" />
      </div>

      <div className="Nav-Items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          <li>
            <button
              className="mybtn"
              onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
