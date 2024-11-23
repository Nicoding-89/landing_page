import React from 'react'
import '../styles/Thanks.css'
import SectionDivider from '../components/SectionDivider'

const Thanks = () => {
  return (
    <section className='thanks'>
      <SectionDivider />
      <h1 className='thanks-title'><i>Thanks for passing by!</i></h1>
      <p className='thanks-text'>I appreciate your time. Let's stay connected!</p>
      <SectionDivider />
    </section>
  )
}

export default Thanks
