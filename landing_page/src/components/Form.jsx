// import React from 'react'
// import SubmitBtn from './SubmitBtn'
// import FormFields from './FormFields';

// const Form = ({ formStyle, errors, inputValue, onSubmit, onChange, fields, isDisabled, isLoading}) => {
//   return (
//     <>
//       <form className={`${formStyle} col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-10`} noValidate onSubmit={onSubmit}>
//         {fields.map(field => (
//           <FormFields 
//             key={field.name} 
//             inputValue={inputValue} 
//             errors={errors} 
//             onChange={onChange} 
//             field={field} />
//         ))}
//         <SubmitBtn isDisabled={isDisabled} isLoading={isLoading} />
//       </form>
//     </>
//   )
// };

// export default Form

import React from 'react'
import SubmitBtn from './SubmitBtn'
import FormFields from './FormFields';

const Form = ({ formStyle, errors, inputValue, onSubmit, onChange, fields, isDisabled, isLoading}) => {
  return (
    <>
      <form 
        className={`${formStyle} col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-10`} 
        noValidate 
        onSubmit={onSubmit}
        role="form"
        aria-live="assertive"
      >
        {fields.map(field => (
          <FormFields 
            key={field.name} 
            inputValue={inputValue} 
            errors={errors} 
            onChange={onChange} 
            field={field} 
          />
        ))}
        <p className='required-fields'><span className='asterik'>(*)</span> Required field.</p>
        <SubmitBtn 
          isDisabled={isDisabled} 
          isLoading={isLoading}
        />
      </form>
    </>
  )
};

export default Form