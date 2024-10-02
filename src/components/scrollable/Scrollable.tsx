import { useState } from 'react';
import Button from '../button/Button';
import './Scrollable.scss';

interface Section {
  title: string;
  content: JSX.Element;
}

const Scrollable: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const sections: Section[] = [
    { title: "What is ‘Maestro,’ you ask?", content: (<p>At Maestro, we provide private tutoring to connect dedicated tutors with eager learners, fostering growth and building futures.</p>) },
    { title: "Our Mission", content: (<p>Whether you're a tutor ready to make an impact or a student unlocking new possibilities, Maestro makes the match simple, reliable, and transformative. We are committed to creating learning experiences that are personalized to each student's unique needs and goals.</p>) },
    { title: "What we offer", content: (<p className="accented">We offer experienced tutoring across a variety of subjects, such as <strong>Mathematics</strong>, <strong>Physics</strong>, <strong>Biology</strong>, and <strong>Chemistry</strong>. Our tutors help students excel in both fundamental concepts and advanced topics, ensuring they are fully equipped for academic success.</p>) },
    { title: "", content: (<div className='cta__container'>
        <p className='bold'>Learning with Maestro is all about flexibility and convenience. Whether you prefer the <strong>in-person</strong> experience or the convenience of <strong>online</strong> learning, we’ve got you covered.</p> <br /> 
        <p className='bold'><strong>Choose the format that works best for you</strong>, and start your journey towards academic excellence today. 
        <div className='btn'><Button /></div>
        </p></div>) },
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>): void => {
    const { scrollTop, clientHeight } = e.currentTarget;
    const newIndex = Math.round(scrollTop / clientHeight);

    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < sections.length) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="scrollable__container" onScroll={handleScroll}>
      {sections.map((section, index) => (
        <div key={index} className={`section ${index === activeIndex ? 'active' : ''}`}>
          <h1>{section.title}</h1>
          {section.content}
            <div className={`scroll-downs ${activeIndex === (sections.length-1) ? 'hide' : ''}`}>
                <div className="mousey">
                    <div className="scroller"></div>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Scrollable;
