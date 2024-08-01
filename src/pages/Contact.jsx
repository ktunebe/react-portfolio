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
  const [formAlert, setFormAlert] = useState(' ')
  const [validEmailAlert, setValidEmailAlert] = useState('')
  const validEmail  = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

  const handleInputChange = (e) => {
    const { name, value } = e.target 

    if (e.target.name === 'email' && validEmail.test(e.target.value)) {
      setValidEmailAlert('')
    }
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onFocusChange = (e) => {
    !e.target.value ? setFormAlert('*Please fill out all fields') : setFormAlert(' ')

    e.target.name === 'email' && !validEmail.test(e.target.value) 
    ? setValidEmailAlert('*Please enter a valid email') 
    :setValidEmailAlert('')
}

  const handleFormSubmit = (e) => {
    e.preventDefault();
   
    if (e.target.name.value && e.target.message.value && validEmail.test(e.target.email.value)) {
      emailjs.sendForm('service_6u2xdql', 'template_y7f9czm', e.target, '3lWyWx2TTMeDH4h3D')
        .then((result) => {
          console.log(result.text);
          alert('Email sent to ktunebe@gmail.com.')
        }, (error) => {
          console.log(error.text);
          alert(`Error sending email: ${error.text}`);
        });
      } else if (!validEmail.test(e.target.email.value) ) {
        setValidEmailAlert('*Please enter a valid email')
        return
      } else if (!e.target.name.value || !e.target.message.value) {
        setFormAlert('*Please fill out all fields')
        return
      }
      
      setFormState(defaultFormState)
  }

  return (
    <>
    <div className='container my-8 mx-auto text-center text-primary w-[80%]'>
      <h2 className='text-3xl sm:text-5xl font-bold mb-8'>Contact Me</h2>
      <p>Drop me a message! Just enter your name and return email address, and I will get back to you as soon as possible.</p>

      <ContactForm 
        formState={formState}
        formAlert={formAlert}
        validEmailAlert={validEmailAlert}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        onFocusChange={onFocusChange}
      />
    </div>
    </>
  )
}
