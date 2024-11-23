import React from 'react'
import ValidationMsg from '../components/ValidationMsg'

const FormFields = ({inputValue, errors, field, onChange }) => {
  const value = inputValue[field.name].value;
  const hasError = errors[field.name];
  const isDefault = inputValue[field.name].isDefault;
  const fieldStyle =  `${!isDefault && (hasError ? 'invalidField' : 'validField')}`;
  const feedbackStyle = `${!isDefault && (hasError ? 'invalidFeedback' : 'validFeedback')}`;

  return (
    <>
      <div className="mb-3">
        <label 
          htmlFor={`${field.name}Input`} 
          className="form-label"
        >
          {field.label} <span className='asterik'>*</span>
        </label>
        {field.type === 'textarea' ?
        (
        <textarea
          className={`form-control ${fieldStyle}`}
          id={`${field.name}Input`}
          name={field.name}
          rows={field.rows}
          value={value}
          onChange={onChange}
          aria-labelledby={`${field.name}Label`}
          aria-describedby={`${field.name}Error`}
          aria-required="true"
          required
          title='Please fill in this field.'
        />
        ) :
        (
        <input
          type={field.type}
          className={`form-control ${fieldStyle}`}
          id={`${field.name}Input`}
          name={field.name}
          placeholder={field.placeholder}
          value={value}
          onChange={onChange}
          required
          aria-required="true"
          aria-labelledby={`${field.name}Label`}
          aria-describedby={`${field.name}Error`}
          aria-invalid={hasError ? "true" : "false"}
          title='Please fill in this field.' 
        />
        )      
        }
        <ValidationMsg 
          style={`inputFeedback ${feedbackStyle}`}
          message={hasError ? hasError : 'Looks good!'}
          id={`${field.name}Error`}
        />
      </div>        
    </>
  )
}

export default FormFields
