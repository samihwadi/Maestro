import "./Button.scss"
import { Link } from 'react-router-dom';

const Button: React.FC = () => {
  return (
    <div className="registration__btn registration__btn--stripe"> 
        <Link to="./form">Book Lesson ⟶</Link>
    </div>
  )
}

export default Button
