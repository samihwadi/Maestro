import './NavMobile.scss'
import './Navbar.scss'
import logo from "../../../src/logo.png";
import { NavLink } from 'react-router-dom';
import { useState } from 'react'; 
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const NavMobile = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className={`nav-mobile__container ${isOpen ? 'open' : ''}`}>
        <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
        {toggleMenu && (
        <div className="navbar__links-container">
            <NavLink to="/" className={({ isActive }) => (isActive ? '' : '')}>Home</NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink>
            <NavLink to="/careers" className={({ isActive }) => (isActive ? 'active' : '')}>Careers</NavLink>
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
        </div>
        )}
        <div className="nav__menu">
            {
                toggleMenu ? <RiCloseLine color= "#282828" size={27} onClick={() => setToggleMenu(false)}/> 
                :<RiMenu3Line color= "#282828" size={27} onClick={() => {setToggleMenu(true); setIsOpen(true);}}/> 
            }
        </div>
    </nav>
  )
}

export default NavMobile
