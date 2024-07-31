import { useState } from 'react'
import emailjs from 'emailjs-com';
import ContactForm  from '../components/ContactForm'

const defaultFormState = {
  name: '',
  email: '',
  message: ''
}

export default function ContactPage() {
  const [formState, setFormState] = useState(defaultFormState)

  const handleInputChange = (e) => {
    const { name, value } = e.target 

    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6u2xdql', 'template_y7f9czm', e.target, '3lWyWx2TTMeDH4h3D')
      .then((result) => {
        console.log(result.text);
        alert('Email sent to ktunebe@gmail.com.')
      }, (error) => {
        console.log(error.text);
        alert(`Error sending email: ${error.text}`);
      });
    
    setFormState(defaultFormState)
  }

  return (
    <>
    <div className='container my-8 mx-auto text-center text-primary w-[80%]'>
      <h2 className='text-3xl sm:text-5xl font-bold mb-8'>Contact Me</h2>
      <p>Drop me a message! Just enter your name and return email address, and I will get back to you as soon as possible.</p>

      <ContactForm 
        formState={formState}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
    </>
  )
}
