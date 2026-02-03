import React from 'react'
import emailjs from '@emailjs/browser'

const initialFormState = {
	name: '',
	email: '',
	message: '',
}

const validEmail = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/i

function ContactForm({setStatus}) {
	const [formState, setFormState] = React.useState(initialFormState)

	async function handleFormSubmit(e) {
		e.preventDefault()
		setStatus('loading')

		const form = e.target
		const email = form.email.value

		// basic email validation
		if (!validEmail.test(email)) {
			throw new Error('Invalid email address')
		}

		try {
			await emailjs.sendForm('service_6u2xdql', 'template_y7f9czm', form, {
				publicKey: '3lWyWx2TTMeDH4h3D',
			})
		} catch (err) {
			// rethrow so caller / container can decide what to do
			setStatus('error')
			throw err
		}

		setFormState(initialFormState)
		setStatus('success')
	}

	function handleChange(e) {
		const { name, value } = e.target

		setFormState({
			...formState,
			[name]: value,
		})
	}



	return (
		<form onSubmit={handleFormSubmit}>
			<label htmlFor="name">Name:</label>
			<input
				id="name"
				name="name"
				type="text"
				value={formState.name}
				onChange={handleChange}
			/>

			<label htmlFor="email">Email:</label>
			<input
				id="email"
				name="email"
				type="email"
				value={formState.email}
				onChange={handleChange}
			/>

			<label htmlFor="message">Message:</label>
			<textarea
				id="message"
				name="message"
				value={formState.message}
				onChange={handleChange}
			/>
			<button type="submit">Submit</button>
		</form>
	)
}

export default ContactForm
