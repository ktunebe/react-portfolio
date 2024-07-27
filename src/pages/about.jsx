import { Outlet } from 'react-router-dom'

export default function AboutPage() {
	return (
		<>
			<div className="container my-8 mx-auto w-[80%]">
				<h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center">About Me</h2>
				<div className="flex-none float-left w-24 h-36 sm:w-32 sm:h-48 mr-3 sm:mr-5 self-center">
					<img
						className="object-contain w-full h-full"
						src="./src/assets/kent-photo.jpg"
						alt="Picture of Kent"></img>
				</div>
				<p className='sm:text-lg indent-8 my-4'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Error provident cum soluta delectus, autem quis animi, beatae officia voluptas accusamus maxime. Ea cumque ab error aspernatur dolorum officiis quisquam a deserunt officia? Aut rerum a esse voluptatum repudiandae tempore perspiciatis fugit ipsa? Distinctio itaque molestias maiores, sed aspernatur earum nisi?
				</p>
				<p className='sm:text-lg indent-8 my-4'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae corrupti in unde laborum cumque modi minima est ipsa assumenda eaque atque voluptate perspiciatis porro nihil, reiciendis labore soluta. Doloremque fuga repudiandae quas repellendus. Incidunt obcaecati nam facilis vitae magnam. Quia, libero culpa ratione voluptas magnam eum dolore perferendis ex itaque?
				</p>
				<Outlet />
			</div>
		</>
	)
}
