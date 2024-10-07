import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './containers/homepage/Homepage'
import Navbar from './components/navbar/Navbar'
import Service from './containers/services/Service'
import About from './containers/aboutUs/About'
import Careers from './containers/careers/Careers'
import Form from './containers/form/Form'
import Footer from './containers/footer/Footer'
import useResize from './useResize'
import NavMobile from './components/navbar/NavMobile'

const App: React.FC = () => {
  const isMobile = useResize(425);
  return (
    <div className="App">
      <Router>
        <div className="navigation">
          {isMobile ? <NavMobile /> : <Navbar />}
        </div>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/services' element={<Service />}></Route>
          <Route path='/about-us' element={<About />}></Route>
          <Route path='/careers' element={<Careers />}></Route>
          <Route path='/form' element={<Form link={'/form'}/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
