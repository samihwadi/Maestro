import "./Button.scss";
import { Link } from 'react-router-dom';
interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  const handleClick = () => {
    if (link.startsWith("#")) {
      const targetElement = document.getElementById(link.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="registration__container">
      {link.startsWith("#") ? (
        // Button functionality for same page navigation
        <button className="registration__btn registration__btn--stripe" onClick={handleClick}>
          {text}
        </button>
      ) : (
        // Button functionality for separate page
        <Link to={link}>
          <button className="registration__btn registration__btn--stripe">{text}</button>
        </Link>
      )}
    </div>
  );
};

export default Button;
