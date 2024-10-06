import './Footer.scss';
import logo from "../../../public/images/logo.png";
import { Link } from 'react-router-dom'; 
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


const Footer: React.FC = () => {
  return (
    <footer className='footer__container'>
        <div className="sections__container">
            <div className="section__one">
                <div className="logo">
                    <Link to='/'><img src={logo} alt="logo"/></Link>
                    <h1>Maestro</h1>    
                </div>
                <div className="runner">
                    <h2>For learners who want results, fast.</h2>
                </div>
                <div className="socials">
                    <a href='https://www.instagram.com/official_thisismaestro/' target='blank'><FaInstagram /></a>
                    <a href='https://www.facebook.com/profile.php?id=61567133600300' target='blank'><FaFacebook /></a>
                    <a href='https://www.linkedin.com/company/this-is-maestro/about/'><FaLinkedin target='blank'/></a>
                </div>
            </div>
            <div className="section__two">
                <h2>Contact us:</h2>
                <div className="contacts">
                    <div className="email">
                        <IoIosMail />
                        <Link to="mailto:inquiry@tutorsatmaestro.com?subject=Inquiry&body=Hello, I would like to know more about your services.">inquiry@thisismaestro.com</Link>
                    </div>
                    <div className="phone__primary">
                        <FaPhone />
                        <Link to="tel:+14379893556">1-(437) 989-3556</Link>
                    </div>
                    <div className="phone__secondary">
                        <FaPhone />
                        <Link to="tel:+16479787099">1-(647) 978-7099</Link>
                    </div>
                </div>
            </div>
            <div className="section__three">
                <Link to='/about-us'>About us</Link>
                <Link to='/services'>Services</Link>
                <Link to='/careers'>Careers</Link>
            </div>
        </div>
        <div className="license">
            <p>© {new Date().getFullYear()} Maestro. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
