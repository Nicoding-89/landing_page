// import React, { useState } from 'react';
// import '../styles/ContactForm.css';
// import fetchData from '../utils/fetchData.js';
// import Form from './Form.jsx';
// import formValidation from '../utils/formValidation.js'
// import SubmissionResponse from './SubmissionResponse.jsx';


// const ContactForm = () => {
//   const [contactData, setContactData] = useState({
//     firstName: {firstName: '', isDefault: true},
//     lastName: {lastName: '', isDefault: true},
//     email: {email: '', isDefault: true},
//     subject: {subject: '', isDefault: true},
//     text: {text: '', isDefault: true},
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [responseState, setResponseState] = useState({ requested: false, result: '' });
//   const [errors, setErrors] = useState({});

//   const fields = [
//     { name: 'firstName', label: 'First name', type: 'text', placeholder: 'John' },
//     { name: 'lastName', label: 'Last name', type: 'text', placeholder: 'Doe' },
//     { name: 'email', label: 'Email address', type: 'email', placeholder: 'john.doe@example.com' },
//     { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Interview' },
//     { name: 'text', label: 'Your message', type: 'textarea', rows: 3 }
//   ];
  
//   const handleOnChange = (e) => {
//     const { name, value } = e.target;

//     setContactData(prevData => ({
//       ...prevData,
//       [name]:{[name]: value, isDefault: false},
//     }));

//     setErrors(prevData => ({
//       ...prevData,
//       [name]: formValidation({ ...contactData, [name]: { [name]: value } })[name] || ''
//     }));
//   };

//   const handleOnSubmit = async (e) => {
//     const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
//     e.preventDefault();

//     const formErrors = formValidation(contactData);
//     setErrors(formErrors);
    
//     if (Object.keys(formErrors).length === 0) {
//       alert('enviando...');
//       const { firstName: { firstName }, lastName: { lastName }, email: { email }, subject: { subject }, text: { text } } = contactData;
//       const sendData = {
//         firstName,
//         lastName,
//         email,
//         subject,
//         text
//       };
//       try {
//         setIsLoading(true);
//         const response = await fetchData(`${BACKEND_BASE_URL}/contact`, 'POST', sendData);
//         if (response.success) {
//           setResponseState({ requested: true, result: response.data.message });
//           setContactData({
//             firstName: { firstName: '', isDefault: true },
//             lastName: { lastName: '', isDefault: true },
//             email: { email: '', isDefault: true },
//             subject: { subject: '', isDefault: true },
//             text: { text: '', isDefault: true }
//           });
//         } else {
//           setResponseState({ requested: true, result: response.errorData?.message || 'An unexpected error occurred.' });
//         }
//       } catch (error) {
//         console.error("Error", error);
//         setResponseState({ requested: true, result: error.errorData?.message || 'An unexpected error occurred.' });
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       alert('Debe completar todos los datos.')
//     };
//   };

//   return (
//     <>
//       {!responseState.requested ?
//         (
//           <Form
//             formStyle={'contact-form'}
//             inputValue={contactData}
//             onSubmit={handleOnSubmit}
//             onChange={handleOnChange}
//             fields={fields}
//             isDisabled={false}
//             isLoading={isLoading}
//             errors={errors}
//           />
//         ) :
//         (
//           <SubmissionResponse
//             responseStyle={'info-tab contact-form'}
//             responseState={responseState}
//             handleOnClick={() => setResponseState({ requested: false, result: '' })}
//           />
//         )
//       }
//     </> 
//   )
// };

// export default ContactForm;

import React, { useState } from 'react';
import '../styles/ContactForm.css';
import fetchData from '../utils/fetchData.js';
import Form from './Form.jsx';
import formValidation from '../utils/formValidation.js'
import SubmissionResponse from './SubmissionResponse.jsx';


const ContactForm = () => {
  const [contactData, setContactData] = useState({
    firstName: {value: '', isDefault: true},
    lastName: {value: '', isDefault: true},
    email: {value: '', isDefault: true},
    subject: {value: '', isDefault: true},
    text: {value: '', isDefault: true},
  });
  const [isLoading, setIsLoading] = useState(false);
  const [responseState, setResponseState] = useState({ requested: false, result: '' });
  const [errors, setErrors] = useState({});

  const fields = [
    { name: 'firstName', label: 'First name', type: 'text', placeholder: 'John' },
    { name: 'lastName', label: 'Last name', type: 'text', placeholder: 'Doe' },
    { name: 'email', label: 'Email address', type: 'email', placeholder: 'john.doe@example.com' },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Interview' },
    { name: 'text', label: 'Your message', type: 'textarea', rows: 3 }
  ];
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
  
    setContactData(prevData => {
      const updatedData = { ...prevData, [name]: { value, isDefault: false } };
      const formErrors = formValidation(updatedData);
      setErrors(formErrors);
      return updatedData;
    });
  };
  

  const handleOnSubmit = async (e) => {
    const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
    e.preventDefault();

    const formErrors = formValidation(contactData);
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      const { firstName, lastName, email, subject, text } = contactData;
      const sendData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        subject: subject.value,
        text: text.value
      };
      try {
        setIsLoading(true);
        const response = await fetchData(`${BACKEND_BASE_URL}/contact`, 'POST', sendData);
        if (response.success) {
          setResponseState({ requested: true, result: response.data.message });
          setContactData({
            firstName: { value: '', isDefault: true },
            lastName: { value: '', isDefault: true },
            email: { value: '', isDefault: true },
            subject: { value: '', isDefault: true },
            text: { value: '', isDefault: true }
          });
        } else {
          setResponseState({ requested: true, result: response.errorData?.message || 'An unexpected error occurred.' });
        }
      } catch (error) {
        console.error("Error", error);
        setResponseState({ requested: true, result: error.errorData?.message || 'An unexpected error occurred.' });
      } finally {
        setIsLoading(false);
      }
    } else {
      setResponseState({ requested: true, result: 'Please fill out all required fields correctly.' });
    };
  };

  return (
    <>
      {!responseState.requested ?
        (
          <Form
            formStyle={'contact-form'}
            inputValue={contactData}
            onSubmit={handleOnSubmit}
            onChange={handleOnChange}
            fields={fields}
            isDisabled={false}
            isLoading={isLoading}
            errors={errors}
          />
        ) :
        (
          <SubmissionResponse
            responseStyle={'info-tab contact-form'}
            responseState={responseState}
            handleOnClick={() => setResponseState({ requested: false, result: '' })}
          />
        )
      }
    </> 
  )
};

export default ContactForm;