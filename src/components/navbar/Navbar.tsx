import './Navbar.scss';
import logo from "../../../public/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img src={logo} alt="logo" />
      <div className="navbar__links-container">
        <p><a href="/">Home</a></p>
        <p><a href="/services">Services</a></p>
        <p><a href="/careers">Careers</a></p>
        <p><a href="/about-us">About Us</a></p>
        <p><a href="/contact">Contact</a></p>
      </div>
    </nav>
  )
}

export default Navbar
