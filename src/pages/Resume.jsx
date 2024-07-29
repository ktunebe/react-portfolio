import { Outlet } from 'react-router-dom'

export default function ResumePage() {
	return (
		<>
			<div className="">
				<div className='text-center m-2'>
					<a
						href="/logos-images/kent-tuneberg-resume.pdf"
						download>
						Download PDF
					</a>
				</div>
				<iframe
					className="h-[75vh] w-[90%] mx-auto"
					src="/logos-images/kent-tuneberg-resume.pdf"
				/>
			</div>
		</>
	)
}
