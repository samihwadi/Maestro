import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './containers/homepage/Homepage'
import Navbar from './components/navbar/Navbar'

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
