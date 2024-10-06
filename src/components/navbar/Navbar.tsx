import './Navbar.scss';
import logo from "../../../public/images/logo.png";
import { NavLink } from 'react-router-dom'; 

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
      <div className="navbar__links-container">
        <NavLink to="/" className={({ isActive }) => (isActive ? '' : '')}>Home</NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink>
        <NavLink to="/careers" className={({ isActive }) => (isActive ? 'active' : '')}>Careers</NavLink>
        <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
