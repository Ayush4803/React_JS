import { useState, useEffect } from 'react';
import { LOGO } from '../../utils/constant';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const status = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(status);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/login'); // Go to login page
  };

  return (
    <div className="Header">
      <div className="LogoContainer">
        <img className="logo" src={LOGO} alt="logo" />
      </div>

      <div className="Nav-Items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/Contactus">Contact Us</Link></li>
          <li><Link to="/Cart">Cart</Link></li>
          <li>
            {isLoggedIn ? (
              <button className="mybtn" onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/login"><button className="mybtn">Login</button></Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
