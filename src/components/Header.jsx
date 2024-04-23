import Logo from "../assets/logo.png";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="navbar-container">
      <img className="logo-img" src={Logo} alt="Logo" />
      <div className="navbar-elements">
        <div className="navbar-element">Destinations</div>
        <div className="navbar-element">Hotels</div>
        <div className="navbar-element">Flights</div>
        <div className="navbar-element">Bookings</div>
        <div>
          <button className="navbar-button">Login</button>
          <button className="navbar-button">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
