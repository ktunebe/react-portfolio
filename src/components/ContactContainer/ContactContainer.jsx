import React from 'react'
import ContactForm from '../ContactForm'


function ContactContainer() {
	const [status, setStatus] = React.useState('idle')

	return (
		<div>
			<ContactForm setStatus={setStatus} />
      {status === 'success' && <p>Email Sent!</p>}
		</div>
	)
}

export default ContactContainer
