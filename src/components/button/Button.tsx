import "./Button.scss"
import { Link } from 'react-router-dom';
interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({text, link}) => {
  return (
    <div className="registration__container"> 
        <Link to={ link }><button className="registration__btn registration__btn--stripe">{ text } ⟶</button></Link>
    </div>
  )
}

export default Button
