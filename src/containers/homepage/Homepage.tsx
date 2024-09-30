import './Homepage.scss'; 
import Article from '../../components/article/Article'

const Homepage: React.FC = () => {
  return (
    <div className='homepage'>
        <div className="homepage__container">
            <Article />
        </div>
    </div>
  )
}

export default Homepage
