import "./Service.scss"
import { useState } from 'react';
import Button from "../../components/button/Button";
const Service = () => {
    // State to track which section is open
    const [openSection, setOpenSection] = useState<string | null>('expertTutoring');
    
    // Function to handle toggling sections
    const toggleSection = (section: string) => {
        setOpenSection((prevSection) => (prevSection === section ? null : section));
    }

  return (
    <div className="services__container">
        <div className="body">
            <h1>What we offer</h1>
            <hr />
            <div>
                <div onClick={() => toggleSection('expertTutoring')} className="section-one__container">
                    <h3>Expert Tutoring</h3>
                    <button>{openSection === 'expertTutoring' ? '-' : '+'}</button>
                </div>
                {openSection === 'expertTutoring' && (
                    <p className="expert-tutoring">
                    Maestro offers experienced tutoring across a variety of subjects, including core subjects
                    such as <strong>Mathematics</strong>, <strong>Physics</strong>, <strong>Biology</strong> and{' '}
                    <strong>Chemistry</strong>, helping students excel in both fundamentals and advanced
                    topics.
                    </p>
                )}
            </div>
            <hr />

            <div>
                <div onClick={() => toggleSection('flexibleLearning')} className="section-two__container">
                <h3>Flexible Learning</h3>
                <button>{openSection === 'flexibleLearning' ? '-' : '+'}</button>
                </div>
                {openSection === 'flexibleLearning' && (
                <p>
                    Whether you feel more at ease learning <strong>in-person</strong> or <strong>online</strong>, we have got you covered. Choose the format that works best for you.
                </p>
                )}
            </div>
            <hr />
            <div>
                <div onClick={() => toggleSection('howItWorks')} className="section-three__container">
                <h3>How it works</h3>
                <button>{openSection === 'howItWorks' ? '-' : '+'}</button>
                </div>
                {openSection === 'howItWorks' && (
                <p>
                    Answer a few quick questions, and we will connect you with the best tutor tailored to your goals and preferences. No pressure—your first lesson is <strong>free</strong>, and you can decide if it is the right fit!
                </p>
                )}
            </div>
            <hr />
            <div className="btn">
                <Button />
            </div>
        </div>
        <div className="pic__services">
            <img src="../../../public/images/Services_pic.png" alt="Hero Image" />
        </div>
    </div>
  )
}

export default Service
