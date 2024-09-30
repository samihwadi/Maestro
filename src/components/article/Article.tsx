import './Article.scss'

const Article: React.FC = () => {
  return (
    <div className="article">
      <div className="article__container">
        <div className="heading__container">
          <p>Elevated Learning Through</p>
          <p className="accented">Maestro</p>
        </div>
        <p className='subheading__text'>In-Home & Online Tutoring</p>
        <p className='cta'><a href="/services">Learn more</a></p>
      </div>
    </div>
  )
}

export default Article
