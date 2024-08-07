import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
	return (
		<>
			<div className='flex flex-col min-h-screen font-dubiel font-bold'>
				<Header />
				<div className="flex-grow">
				<Outlet />
				</div>
				<Footer />
			</div>
		</>
	)
}
