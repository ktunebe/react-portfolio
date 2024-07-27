import { useState } from 'react'
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

    console.log(`Name: ${formState.name}`)
    console.log(`Email: ${formState.email}`)
    console.log(`Message: '${formState.message}'`)

    setFormState(defaultFormState)
  }

  return (
    <>
    <div className='container my-8 mx-auto text-center w-[80%]'>
      <h2 className='text-3xl sm:text-5xl font-bold mb-8'>Contact Me</h2>

      <ContactForm 
        formState={formState}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
    </>
  )
}
