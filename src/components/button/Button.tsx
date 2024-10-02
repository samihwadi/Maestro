import "./Button.scss"
import { Link } from 'react-router-dom';

const Button: React.FC = () => {
  return (
    <div className="registration__container"> 
        <Link to="./form"><button className="registration__btn registration__btn--stripe">Book Lesson ⟶</button></Link>
    </div>
  )
}

export default Button
