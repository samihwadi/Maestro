import './StudentForm.scss';
import { useRef, useState, ChangeEvent, FocusEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface InputField {
    id: number;
    name: string;
    type: string;
    placeholder: string;
    label: string; 
    required?: boolean;
}

interface OptionField {
    id: number;
    name: string;
    value: string;
    text: string;
}

interface StudentValues {
    studentFirstName: string;
    studentLastName: string;
    email: string;
    guardianName: string;
    phone: string;
    grade: string;
    subject: string;
    days: string;
    method: string;
}

const StudentForm: React.FC = () => {
    const [studentValues, setValues] = useState<StudentValues>({
        studentFirstName: "",
        studentLastName: "",
        email: "",
        guardianName: "",
        phone: "",
        grade: "",
        subject: "",
        days: "",
        method: "",
    });

    const [focused, setFocused] = useState<{ [key: string]: boolean }>({});
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, 
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            form.current!, 
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert("Form submitted successfully!");
                    form.current!.reset();  // Reset the form DOM elements
                    setValues({
                        studentFirstName: "",
                        studentLastName: "",
                        email: "",
                        guardianName: "",
                        phone: "",
                        grade: "",
                        subject: "",
                        days: "",
                        method: "",
                    }); 
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name } = e.target;
        setFocused({ ...focused, [name]: true });
        validateField(name);
    };

    const validateField = (name: string) => {
        const value = studentValues[name as keyof StudentValues];
        let error = "";

        switch (name) {
            case "studentFirstName":
            case "studentLastName":
                if (!/^[A-Za-z]+$/.test(value)) {
                    error = "This field should not include special characters!";
                }
                break;
            case "guardianName":
                if (!/^[A-Za-z]+(\s[A-Za-z]+)*$/.test(value)) {
                    error = "Guardian name shouldn't include any special characters!";
                }
                break;
            case "email":
                if (!/\S+@\S+\.\S+/.test(value)) {
                    error = "It should be a valid email address!";
                }
                break;
            case "phone":
                if (!/^(\(\d{3}\)\s?\d{3}-\d{4}|\d{3}\d{3}\d{4})$/.test(value)) {
                    error = "Not a valid Canadian phone number format! Eg: 1234567890 or (123) 456-7890";
                }
                break;
            default:
                break;
        }

        setErrors({ ...errors, [name]: error });
    };

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setValues({ ...studentValues, [name]: value });

        if (focused[name]) {
            validateField(name);
        }
    };

    const studentOptions: OptionField[] = [
        { id: 1, name: "method", value: "online", text: "Online"},
        { id: 2, name: "method", value: "in-person", text: "In-Person"},
        { id: 3, name: "grade", value: "grade-nine", text: "Grade 9"},
        { id: 4, name: "grade", value: "grade-ten", text: "Grade 10"},
        { id: 5, name: "grade", value: "grade-eleven", text: "Grade 11"},
        { id: 6, name: "grade", value: "grade-twelve", text: "Grade 12"},
        { id: 7, name: "subject", value: "mathematics", text: "Mathematics"},
        { id: 8, name: "subject", value: "physics", text: "Physics"},
        { id: 9, name: "subject", value: "chemistry", text: "Chemistry"},
        { id: 10, name: "subject", value: "biology", text: "Biology"},
    ];

    const studentInputs: InputField[] = [
        {
            id: 1,
            name: "studentFirstName",
            type: "text",
            placeholder: "First Name",
            label: "Student's first name",
            required: true,
          },
          {
            id: 2,
            name: "studentLastName",
            type: "text",
            placeholder: "Last name",
            label: "Student's last name",
            required: true,
          },
          {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
            required: true,
          },
          {
            id: 4,
            name: "guardianName",
            type: "text",
            placeholder: "Guardian Name",
            label: "Guardian Name",
            required: true,
          },
          {
            id: 5,
            name: "phone",
            type: "text",
            placeholder: "(123) 456-7890 or 1234567890",
            label: "Phone number (Canada)",
            required: true,
          },
          {
            id: 6,
            name: "days",
            type: "text",
            placeholder: "E.g. Mon, Wed, Thur",
            label: "Preferred days (max 3)",
            required: true,
          },
    ];

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
                <form ref={form} onSubmit={sendEmail}>
                    {studentInputs.map((inputs) => (
                            <div key={inputs.id} className='inputs__container'> 
                                <label>{inputs.label}</label>
                                <input
                                    name={inputs.name}
                                    type={inputs.type}
                                    placeholder={inputs.placeholder}
                                    value={studentValues[inputs.name as keyof StudentValues]}
                                    onChange={onChange}
                                    onBlur={handleBlur}
                                    className={errors[inputs.name] && focused[inputs.name] ? "invalid" : ""}
                                    required={inputs.required}
                                />
                                {errors[inputs.name] && focused[inputs.name] && (
                                <span className="error-message">{errors[inputs.name]}</span>
                                )}
                            </div>
                    ))}
                    <label>Preferred mode of service</label>
                    <select name="method" value={studentValues.method} required onChange={onChange}>
                        <option value="">--Please choose an option--</option>
                        {studentOptions
                            .filter((options) => options.name === "method")
                            .map((options) => (
                                <option key={options.id} value={options.value}>
                                    {options.text}
                                </option>
                            ))}
                    </select>

                    <label>Grade</label>
                    <select name="grade" value={studentValues.grade} required onChange={onChange}>
                        <option value="">--Please choose an option--</option>
                        {studentOptions
                            .filter((options) => options.name === "grade")
                            .map((options) => (
                                <option key={options.id} value={options.value}>
                                    {options.text}
                                </option>
                            ))}
                    </select>

                    <label>Subject</label>
                    <select name="subject" value={studentValues.subject} required onChange={onChange}>
                        <option value="">--Please choose an option--</option>
                        {studentOptions
                            .filter((options) => options.name === "subject")
                            .map((options) => (
                                <option key={options.id} value={options.value}>
                                    {options.text}
                                </option>
                            ))}
                    </select>
                    <button className="submission__btn submission__btn--stripe">Submit</button>
                </form>
            </div>
            <div className="form__image">
                <img src="../../../public/images/Registration_pic.png" alt="Sketch of two men walking" />
            </div>
        </div>
    );
};

export default StudentForm;
