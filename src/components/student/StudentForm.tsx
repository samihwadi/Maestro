import './StudentForm.scss';
import { useState } from 'react';

const StudentForm: React.FC = () => {
  
  return (
    <div className="formInput">
        <div className="studentForm__container">
            <div className="text__container">
                <h1>Your Future Starts Now</h1>
                <p>
                    Fill out the form, and let us match you with a tutor who understands your
                    needs, helping you achieve your academic goals with ease.
                </p>
            </div>
            <form>
                <label>Preferred mode of service</label>
                <select name="method" id="method" required>
                    <option value="">--Please choose an option--</option>
                    <option value="online">Online</option>
                    <option value="in-person">In-Person</option>
                </select>
                <label>Student's first name</label>
                <input type="text" required/>
                <label>Student's last name</label>
                <input type="text" required/>
                <label>Email</label>
                <input type="email" required/>
                <label>Guardian's name</label>
                <input type="text" required/>
                <label>Phone number</label>
                <input type="text" placeholder= "(123) 456-7890 or 123-456-7890" required/>
                <label>Grade</label>
                <select name="grade" id="grade" required>
                    <option value="">--Please choose an option--</option>
                    <option value="grade-nine">Grade 9</option>
                    <option value="grade-ten">Grade 10</option>
                    <option value="grade-eleven">Grade 11</option>
                    <option value="grade-twelve">Grade 12</option>
                </select>
                <label>Subject</label>
                <select name="subject" id="subject" required>
                    <option value="">--Please choose an option--</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="biology">Biology</option>
                </select>
                <label>Preferred days (max 3)</label>
                <input type="text" placeholder= "E.g. Mon, Wed, Thur" required/>
                <button className='submission__btn submission__btn--stripe'>Submit</button>
            </form>
        </div>
        <div className="form__image">
            <img src="../../../public/images/Registration_pic.png" alt="Sketch of two men walking" />
        </div>
    </div>
  );
};

export default StudentForm;
