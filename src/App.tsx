import './App.scss'
import Navbar from './components/navbar/Navbar'
import Article from './components/article/Article'


const App: React.FC = () => {

  return (
    <div className="App">
      <Navbar />
      <Article />
    </div>
  )
}

export default App
