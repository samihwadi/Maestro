import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './containers/homepage/Homepage'
import Navbar from './components/navbar/Navbar'
import Service from './containers/services/Service'
import About from './containers/aboutUs/About'
import Careers from './containers/careers/Careers'
import Form from './containers/form/Form'

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/services' element={<Service />}></Route>
          <Route path='/about-us' element={<About />}></Route>
          <Route path='/careers' element={<Careers />}></Route>
          <Route path='/form' element={<Form />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
