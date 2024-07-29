import { Outlet } from 'react-router-dom'

export default function ResumePage() {
	return (
		<>
			<div className="">
				<div className='text-center m-2'>
					<a
						href="../src/assets/my-portfolio/kent-tuneberg-resume.pdf"
						download>
						Download PDF
					</a>
				</div>
				<iframe
					className="h-[75vh] w-[90%] mx-auto"
					src="../src/assets/my-portfolio/kent-tuneberg-resume.pdf"
				/>
			</div>
		</>
	)
}
