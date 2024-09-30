import './App.scss'
import Navbar from './components/navbar/Navbar'
import Article from './components/article/Article'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Article />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
