import { Outlet } from 'react-router-dom'

export default function AboutPage() {
	return (
		<>
			<div className="mx-auto w-full text-primary">
				<div className="min-h-[40vh] py-12 flex justify-between bg-skyBg">
					<div className='self-center justify-center text-center px-4 flex-initial w-1/2'>
						<h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center">
							About Me
						</h2>
						<p className="sm:text-lg indent-8 my-4">
							My name is Kent Tuneberg, and I'd love to help you with any of your web development needs!
						</p>
						<a href="/contact"><button className='button bg-secondary hover:bg-lightBg hover:text-secondary text-lightBg w-3/4 py-2 rounded-3xl'>Contact Me</button></a>
					</div>
					<div className='flex-none self-center h-48 sm:h-64 w-1/2'>
						<img
							className="object-contain w-full h-full"
							src="/logos-images/kent-photo.jpg"
							alt="Picture of Kent"></img>
					</div>
				</div>
				<div className="min-h-[40vh] flex flex-col sm:flex-row justify-between bg-lightBg">
					<div className='w-full sm:w-1/2'>
						<img
							className="object-cover w-full h-full"
							src="/logos-images/stock-html.png"
							alt="Stock photo of HTML code"></img>
					</div>
					<div className='self-center justify-center px-4 flex-initial w-full sm:w-1/2 py-12'>
						<p className="sm:text-lg indent-8 my-4 px-4">
							I currently live in Rockford, Illinois with my wife, Alex, and our two golden retrievers, Chester and Herbie. My hobbies include sports, video games and enjoying time with Alex and the dogs. After working as a dentist for 8 years, I made a career transition to web development, and bring I'll a fresh, well-rounded perspective to coding real world applications. 
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
