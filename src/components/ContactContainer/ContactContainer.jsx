import React from 'react'
import ContactForm from '../ContactForm'

function ContactContainer() {
	const [status, setStatus] = React.useState('idle')
	const [errorMessage, setErrorMessage] = React.useState("")
	const [animate, setAnimate] = React.useState(false)

	React.useEffect(() => {
		if (status === 'success') {
			requestAnimationFrame(() => setAnimate(true))
		}
	}, [status])

	return (
		<div className="mx-auto">
			<p className="text-center text-sm sm:text-base lg:text-lg mx-auto w-3/4 py-6">
				Drop me a message! Just enter your name and return email address, and I
				will get back to you as soon as possible.
			</p>
			{status === 'success' && (
				<p className="text-center text-xl text-status-success my-6 relative overflow-hidden">
					Email Sent!
					<span
						className={`absolute ml-2 transition-transform duration-[2s] ease-in 
							${animate ? 'translate-x-[1500px]' : 'translate-x-0'}`}>
						📨
					</span>
				</p>
			)}
			{status === 'error' && (
				<p className="text-center text-xl text-red-500 my-6">{errorMessage}</p>
			)}
			<ContactForm status={status} setStatus={setStatus} setErrorMessage={setErrorMessage} />
		</div>
	)
}

export default ContactContainer
