import StudentForm from "../../components/student/studentForm";
import "./Form.scss";
import { useState, ChangeEvent, FormEvent } from 'react';

const Form = () => {
  return (
    <div className="form__container">
        <div className="student__form">
            <StudentForm />
        </div>
    </div>
  )
}

export default Form
