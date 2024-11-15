import React from 'react'

const ValidationMessage = ({ id, style, message }) => (
  <p id={id} className={style} aria-live="assertive">
    {message}
  </p>
);

export default ValidationMessage