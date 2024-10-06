import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/firebaseConfig';
import emailjs from '@emailjs/browser';
import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import './CareerForm.scss'

interface CareerValues {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phone: string;
    resume: File | null;
    transcript: File | null;
    subject: string;
    availability: string;
    message: string;
}

interface InputField {
    id: number;
    name: string;
    type: string;
    placeholder?: string;
    label: string;
    required?: boolean;
}

const CareerForm: React.FC = () => {
    const [values, setValues] = useState<CareerValues>({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
        resume: null,
        transcript: null,
        subject: "",
        availability: "",
        message: "",
    });

    const [focused, setFocused] = useState<{ [key: string]: boolean }>({});
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const allowedFileTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
    ];

    const form = useRef<HTMLFormElement>(null);
    const uploadFileToStorage = async (file: File, path: string): Promise<string> => {
        const storageRef = ref(storage, path);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
    };

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Upload files to Firebase Storage and get their URLs
            const resumeUrl = values.resume ? await uploadFileToStorage(values.resume, `resumes/${values.resume.name}`) : '';
            const transcriptUrl = values.transcript ? await uploadFileToStorage(values.transcript, `transcripts/${values.transcript.name}`) : '';

            // Prepare email content with file URLs
            const emailContent = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                address: values.address,
                phone: values.phone,
                subject: values.subject,
                availability: values.availability,
                message: values.message,
                resumeUrl, // URL of the uploaded resume
                transcriptUrl, // URL of the uploaded transcript
            };

            // Send the email via EmailJS
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_CAREERS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_CAREERS_TEMPLATE_ID,
                emailContent,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log('SUCCESS!');
            alert("Application submitted successfully!");
            form.current!.reset();
            setValues({
                firstName: "",
                lastName: "",
                email: "",
                address: "",
                phone: "",
                resume: null,
                transcript: null,
                subject: "",
                availability: "",
                message: "",
            });
        } catch (error) {
            console.log('FAILED...', error);
        }
    };
    

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setFocused({ ...focused, [name]: true });
        validateField(name);
    };
    
    const validateField = (name: string) => {
        const value = values[name as keyof CareerValues];
        let error = "";
    
        if (typeof value === "string") {
            switch (name) {
                case "firstName":
                case "lastName":
                    if (!/^[A-Za-z]+$/.test(value)) {
                        error = "This field should not include special characters!";
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
        }
    
        setErrors({ ...errors, [name]: error });
    };
    
    

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
    
        // Type guard to check if the event target is an HTMLInputElement with type 'file'
        if (e.target instanceof HTMLInputElement && e.target.type === "file") {
            const files = e.target.files;
            if (files && files.length > 0) {
                const file = files[0];
    
                // Validate file type when uploading
                if (!allowedFileTypes.includes(file.type)) {
                    setErrors({
                        ...errors,
                        [name]: `${name === 'resume' ? 'Resume' : 'Transcript'} must be a PDF, DOCX, or TXT file.`,
                    });
                } else {
                    setValues({ ...values, [name]: file });
                    setErrors({ ...errors, [name]: '' });
                }
            }
        } else {
            // Handle text inputs and text areas
            setValues({ ...values, [name]: value as string });
    
            if (focused[name]) {
                validateField(name);
            }
        }
    };    

    const careerInputs: InputField[] = [
        {
            id: 1,
            name: "firstName",
            type: "text",
            placeholder: "First Name",
            label: "First Name",
            required: true,
        },
        {
            id: 2,
            name: "lastName",
            type: "text",
            placeholder: "Last Name",
            label: "Last Name",
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
            name: "address",
            type: "text",
            placeholder: "Address",
            label: "Full Address",
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
            name: "resume",
            type: "file",
            label: "Upload Your Resume",
            required: true,
        },
        {
            id: 7,
            name: "transcript",
            type: "file",
            label: "Upload Your Recent Transcript",
            required: true,
        },
        {
            id: 8,
            name: "subject",
            type: "text",
            placeholder: "Subjects",
            label: "Please state the subjects you are interested in teaching",
            required: true,
        },
    ];

    return (
        <div className="careers__form__container">
            <form ref={form} onSubmit={sendEmail}>
                {careerInputs.map((inputs) => (
                    <div key={inputs.id} className="inputs__container">
                        <label>{inputs.label}</label>
                        <input
                            name={inputs.name}
                            type={inputs.type}
                            placeholder={inputs.placeholder}
                            value={inputs.type === "file" ? undefined : values[inputs.name as keyof CareerValues] as string}
                            onChange={onChange}
                            onBlur={handleBlur}
                            className={errors[inputs.name] && focused[inputs.name] ? "invalid" : ""}
                        />
                        {errors[inputs.name] && focused[inputs.name] && (
                            <span className="error-message">{errors[inputs.name]}</span>
                        )}
                    </div>
                ))}

                <label>Please provide us with your availability</label>
                <textarea
                    name="availability"
                    value={values.availability}
                    onChange={onChange}
                    onBlur={handleBlur}
                    placeholder="Availability"
                    rows={4}
                    required
                ></textarea>

                <label>Any additional information you would like to tell us?</label>
                <textarea
                    name="message"
                    value={values.message}
                    onChange={onChange}
                    onBlur={handleBlur}
                    placeholder="Message"
                    rows={6}
                    required
                ></textarea>

                <button className="submission__btn submission__btn--stripe">Submit Application</button>
            </form>
        </div>
    );
};

export default CareerForm;
