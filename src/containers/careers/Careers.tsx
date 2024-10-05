import Button from "../../components/button/Button";
import Form from "../form/Form";
import "./Careers.scss";

const Careers: React.FC = () => {
  return (
    <div className="careers__container">
        <div className="intro__container">
            <div className="intro__pic">
                <img src="../../../public/images/Careers_hero.png" alt="Leonardo statue figure" />
            </div>
            <div className="intro__text">
                <h1>Join our team at <strong>Maestro</strong></h1>
                <p>
                    At Maestro, we believe in unlocking potential—not just for students, but for our tutors too. 
                    If you're passionate about teaching and making a lasting impact on learners, we'd love to hear from you. 
                    We're looking for dedicated educators who are ready to inspire and guide students, ranging from <strong>Grade 9</strong> to <strong>Grade 12</strong>, toward their goals. Join a team that values growth, collaboration, and the transformative power of education.
                </p>
                <Button text='Apply ↓' link={'#apply'}/>
            </div>
        </div>  
        <div className="sections__container">
            <div className="section__one spacing">
                <h1>Why tutor at <strong>Maestro</strong>?</h1>
                <p>At Maestro, you’re not just a tutor—you’re a mentor, a guide, and a partner in our students' journeys to success. Here’s why you’ll love working with us: </p>
                    <ul>
                        <li><strong>Flexibility</strong>: Choose your schedule and teach in a way that fits your lifestyle. Whether you prefer to tutor in-person or online, we offer both options.</li>
                        <li><strong>Impactful Work</strong>: You’ll be part of a meaningful mission, helping students build confidence, excel in academics, and achieve their dreams.</li>
                    </ul>
            </div>
            <div className="section__two spacing">
                <div className="section__two__img">
                    <img src="../../../public/images/Careers_1.png" alt="" />
                </div>
                <div className="section__two__text">
                    <h1>What we're looking for</h1>
                    <p>We are searching for tutors who:</p>
                    <ul>
                        <li>Are passionate about education and mentoring.</li>
                        <li>Can communicate complex topics in a way that’s easy to understand for students.</li>
                        <li>Are reliable, professional, and committed to helping students succeed.</li>
                        <li>Have prior tutoring or teaching experience (preferred, but not required).</li>
                    </ul>
                </div>
            </div>
            <div className="section__three spacing">
                <h1>Responsibilities</h1>
                <p>As a tutor with Maestro, you will:</p>
                <ul>
                    <li>Provide one-on-one or small group tutoring to help students achieve academic success.</li>
                    <li>Tailor lessons to meet individual students' needs and learning styles.</li>
                    <li>Track student progress and communicate feedback to parents and students.</li>
                    <li>Stay updated on the latest educational techniques to ensure effective teaching.</li>
                </ul>
            </div>
            <div id="apply" className="section__four spacing">
                <h1>Join us in shaping the future</h1>
                <p>
                    At Maestro, we’re not just offering jobs—we’re creating a community of educators who are passionate about making a difference. 
                    If you’re ready to inspire, grow, and help students unlock their potential, we’d love to have you on board. 
                    Apply today and become part of the Maestro family!
                </p>
            </div>
        </div>
        <div className="form spacing">
            <Form link='/careers'/>
        </div>
    </div>
  )
}

export default Careers
