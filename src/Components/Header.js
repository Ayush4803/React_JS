import {LOGO} from "../..//utils/constant";
const Header = () => {
    return (
        <div className="Header">
            <div className="LogoContainer">
                <img className="logo"
                    src ={LOGO}/>
            </div>
            <div className="Nav-Items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;