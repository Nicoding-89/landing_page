// const validationsForm = (form) => {
//   const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
//   const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
//   const regexText = /^.{1,255}$/;

//   let errors = {};
//   if (!form.firstName.firstName.trim()) {
//     errors.firstName = 'First name is required';
//   } else if (!regexName.test(form.firstName.firstName)) {
//     errors.firstName = 'First name can only contain letters and spaces';
//   };

//   if (!form.lastName.lastName.trim()) {
//     errors.lastName = 'Last name is required';
//   } else if (!regexName.test(form.lastName.lastName)) {
//     errors.lastName = 'Last name can only contain letters and spaces';
//   };
  
//   if (!form.email.email.trim()) {
//     errors.email = 'Email is required';
//   } else if (!regexEmail.test(form.email.email)) {
//     errors.email = 'Invalid email format';
//   }
//   if (!form.subject.subject.trim()) {
//     errors.subject = 'Subject is required';
//   }
//   if (!form.text.text.trim()) {
//     errors.text = 'Message is required';
//   } else if (!regexText.test(form.text.text)) {
//     errors.text = 'Message exceeds 255 characters';
//   }

//   return errors;
// };

// export default validationsForm;

const validationsForm = (form) => {
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexText = /^.{1,255}$/;

  let errors = {};
  if (!form.firstName.value.trim()) {
    errors.firstName = 'First name is required';
  } else if (!regexName.test(form.firstName.value)) {
    errors.firstName = 'First name can only contain letters and spaces';
  };

  if (!form.lastName.value.trim()) {
    errors.lastName = 'Last name is required';
  } else if (!regexName.test(form.lastName.value)) {
    errors.lastName = 'Last name can only contain letters and spaces';
  };
  
  if (!form.email.value.trim()) {
    errors.email = 'Email is required';
  } else if (!regexEmail.test(form.email.value)) {
    errors.email = 'Invalid email format';
  }
  if (!form.subject.value.trim()) {
    errors.subject = 'Subject is required';
  }
  if (!form.text.value.trim()) {
    errors.text = 'Message is required';
  } else if (!regexText.test(form.text.value)) {
    errors.text = 'Message exceeds 255 characters';
  }

  return errors;
};

export default validationsForm;