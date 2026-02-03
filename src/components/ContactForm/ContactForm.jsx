import React from 'react'
import emailjs from '@emailjs/browser'

const initialFormState = {
	name: '',
	email: '',
	message: '',
}

const validEmail = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,24})$/i

function ContactForm({ status, setStatus, setErrorMessage }) {
	const [formState, setFormState] = React.useState(initialFormState)

	async function handleFormSubmit(e) {
		e.preventDefault()

		const form = e.target
		const nameClean = formState.name.trim()
		const emailClean = formState.email.trim()
		const messageClean = formState.message.trim()

		try {
			if (emailClean === '' || nameClean === '' || messageClean === '') {
				throw new Error('Please fill out all fields')
			}
			if (!validEmail.test(emailClean)) {
				throw new Error('Invalid email address')
			}
			if (formState.company?.value) {
				throw new Error('Spam detected')
			}
			if (nameClean.length < 2) throw new Error('Name is too short')
			if (nameClean.length > 80) throw new Error('Name is too long')
			if (messageClean.length > 500) throw new Error('Please keep message under 500 characters.')

			setStatus('loading')
			setErrorMessage('')
			await emailjs.sendForm('service_6u2xdql', 'template_y7f9czm', form, {
				publicKey: '3lWyWx2TTMeDH4h3D',
			})

			setFormState(initialFormState)
			setStatus('success')
		} catch (err) {
			// rethrow so caller / container can decide what to do
			setStatus('error')
			setErrorMessage(err.message || 'Something went wrong...')
		}
	}

	function handleChange(e) {
		const { name, value } = e.target

		setFormState({
			...formState,
			[name]: value,
		})
	}

	return (
		<form
			onSubmit={handleFormSubmit}
			className="flex flex-col bg-secondary-500/15 border border-secondary-400/80 text-sm sm:text-base mx-auto max-w-2xl p-6">
			<label htmlFor="name">Name:</label>
			<input
				id="name"
				name="name"
				type="text"
				value={formState.name}
				onChange={handleChange}
				className="form-input max-w-64"
			/>

			<label htmlFor="email">Email:</label>
			<input
				id="email"
				name="email"
				type="email"
				value={formState.email}
				onChange={handleChange}
				className="form-input max-w-64"
			/>

			<input
				type="text"
				name="company"
				value={formState.company ?? ''}
				onChange={handleChange}
				className="hidden"
				tabIndex={-1}
				autoComplete="off"
			/>

			<label htmlFor="message" className='flex justify-between'><span>Message:</span><span className={formState.message.length > 500 ? 'text-status-danger' : ''}>{`${formState.message.length}/500`}</span></label>
			<textarea
				id="message"
				name="message"
				type="text"
				value={formState.message}
				onChange={handleChange}
				className="form-input min-h-24"
			/>
			<button
				type="submit"
				disabled={status === 'loading'}
				className="bg-secondary-500 hover:bg-secondary-400 text-base sm:text-lg mx-auto py-2 px-4 w-32 rounded-full disabled:cursor-not-allowed disabled:opacity-50">
				Send
			</button>
		</form>
	)
}

export default ContactForm
