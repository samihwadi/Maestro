import React from 'react';
import { useLocation } from 'react-router-dom';
import CareerForm from '../../components/hiring/CareerForm'; 
import StudentForm from '../../components/student/StudentForm'; 
import './Form.scss'

interface FormProps {
    link: string; 
}

const Form: React.FC<FormProps> = ({ link }) => {
    const location = useLocation();

    // Determine whether CareerForm is being used
    const isCareerForm = link === '/careers' || location.pathname === '/careers';

    return (
      <div className={`form__container ${isCareerForm ? 'career__form' : 'student__form'}`}>
        {isCareerForm ? (
          <CareerForm />
        ) : (
          <StudentForm />
        )}
      </div>
    );
};

export default Form;
