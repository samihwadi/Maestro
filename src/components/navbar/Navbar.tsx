import './Navbar.scss';
import logo from "../../../public/images/logo.png";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <Link to='/'><img src={logo} alt="logo" /></Link>
      <div className="navbar__links-container">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
