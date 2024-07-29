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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
							provident cum soluta delectus, autem quis animi, beatae officia
							voluptas accusamus maxime. 
						</p>
						<a href="/contact"><button className='button bg-secondary text-lightBg w-3/4 py-2 rounded-3xl'>Contact Me</button></a>
					</div>
					<div className='flex-none self-center h-48 sm:h-64 w-1/2'>
						<img
							className="object-contain w-full h-full"
							src="./src/assets/kent-photo.jpg"
							alt="Picture of Kent"></img>
					</div>
				</div>
				<div className="min-h-[40vh] flex justify-between bg-lightBg">
					<div className='w-1/2'>
						<img
							className="object-cover w-full h-full"
							src="./src/assets/stock-html.png"
							alt="Stock photo of HTML code"></img>
					</div>
					<div className='self-center justify-center text-center px-4 flex-initial w-1/2 py-12'>
						<p className="sm:text-lg indent-8 my-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
							provident cum soluta delectus, autem quis animi, beatae officia
							voluptas accusamus maxime. Ea cumque ab error aspernatur dolorum
							officiis quisquam a deserunt officia? Aut rerum a esse voluptatum
							repudiandae tempore perspiciatis fugit ipsa? Distinctio itaque
							molestias maiores, sed aspernatur earum nisi?
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
