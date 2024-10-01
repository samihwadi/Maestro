import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './containers/homepage/Homepage'
import Navbar from './components/navbar/Navbar'
import Service from './containers/services/Service'

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/services' element={<Service />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
