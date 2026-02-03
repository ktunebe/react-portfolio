import { Outlet } from 'react-router-dom'

export default function ResumePage() {
	return (
		<>
			<header className="header mb-18">
				<h1 className="text-2xl">Kent Tuneberg</h1>
				<a href="/" className="bg-primary-600/80 rounded-full px-3 py-2">
					Home
				</a>
			</header>

			<div className="text-center my-6 ">
				<a
					href="/logos-images/kent_tuneberg_resume.pdf"
					download
					className="bg-primary-600/80 rounded-full px-3 py-2">
					Download PDF
				</a>
			</div>
			<iframe
				className="h-[75vh] w-[90%] mx-auto"
				src="/logos-images/kent_tuneberg_resume.pdf"
			/>
		</>
	)
}
