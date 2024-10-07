import Scrollable from "../../components/scrollable/Scrollable"
import "./About.scss"
const About: React.FC = () => {
  return (
    <div className="about__container">
        <div className="fixed">
            <h1>Find the perfect tutor, every time.</h1>
            <img src="../../../images/About_us_hero.png" alt="Digital Illustration" />
        </div>
        <div className="scroll">
            <Scrollable />
        </div>
    </div>
  )
}

export default About
