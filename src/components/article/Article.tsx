import './Article.scss'
import { Link } from 'react-router-dom';

const Article: React.FC = () => {
  return (
    <div className="article">
      <div className="article__container">
        <div className="heading__container">
          <p>Elevated Learning Through</p>
          <p className="accented">Maestro</p>
        </div>
        <p className='subheading__text'>In-Home & Online Tutoring</p>
        <Link className='cta' to='/services'>Learn more</Link>
      </div>
    </div>
  )
}

export default Article
