export default function ProjectCarousel({
	projects,
	index,
	handleNextClick,
	handlePrevClick,
	translateNextIndex,
	translatePrevIndex,
}) {
	return (
		<>
			<div className="relative p-4">
				{/* Next Image */}
				<img
					src={
						// Will display project + 1 image at rest, but will display project - 2 when Prev Btn is clicked while it wraps around to eventually display project - 1 at other image position
						translatePrevIndex === index
							? projects[(index - 2 + projects.length) % projects.length].imgSrc
							: projects[(index + 1 + projects.length) % projects.length].imgSrc
					}
					alt={`Screenshot of ${projects[index].title}`}
					className={`w-[80%] border-2 border-white rounded-3xl absolute top-10 -right-3 sm:-right-6 md:-right-12 
            ${
							// Wrap direction based on prev or next click
							translatePrevIndex === index
								? '-translate-x-[35%] sm:-translate-x-[40%] z-10 duration-500'
								: translateNextIndex === index
								? '-translate-x-[15%] translate-y-[5%] scale-[1.15] z-50 duration-500'
								: ''
						}`}
				/>
				{/* Previous Image */}
				<img
					src={
						// Will display project - 1 image at rest, but will display project + 2 when Next Btn is clicked while it wraps around to eventually display project + 1 at other image position
						translateNextIndex === index
							? projects[(index + 2 + projects.length) % projects.length].imgSrc
							: projects[(index - 1 + projects.length) % projects.length].imgSrc
					}
					alt={`Screenshot of ${projects[index].title}`}
					className={`w-[80%] border-2 border-white rounded-3xl absolute top-10 -left-3 sm:-left-6 md:-left-12 
            ${
							// Wrap direction based on prev or next click
							translatePrevIndex === index
								? 'translate-x-[15%] translate-y-[5%] scale-[1.15] z-50 duration-500'
								: translateNextIndex === index
								? 'translate-x-[35%] sm:translate-x-[40%] z-10 duration-500'
								: ''
						} `}
				/>
				{/* Current Image */}
				<a
					className="sm:text-lg underline text-center"
					href={projects[index].githubUrl}
					target="_blank">
				<img
					src={projects[index].imgSrc}
					alt={`Screenshot of ${projects[index].title}`}
					className={`w-full border-2 border-white rounded-3xl relative top-4 sm:top-0 left-0 
            ${
							// Wrap direction based on prev or next click
							translatePrevIndex === index
								? 'translate-x-[15%] sm:translate-x-[10%] -translate-y-[5%] scale-[.85] sm:scale-[.85] z-20 duration-500'
								: translateNextIndex === index
								? '-translate-x-[15%] sm:-translate-x-[10%] -translate-y-[5%] scale-[.85] sm:scale-[.85] z-20 duration-500'
								: ''
						}`}
				/>
				</a>
			</div>
			{/* Steps to show how many projects to scroll through */}
			<ul className="justify-center pt-3 gap-2 flex flex-wrap">
				{projects.map((project) => {
					return (
						<li
							key={project.title}
							className={`px-2 rounded-full ${
								project === projects[index] ? 'bg-skyBg' : ''
							}`}>{projects.indexOf(project) + 1}</li>
					)
				})}
			</ul>
			{/* Buttons and Project info */}
			<div className="flex gap-3 items-center relative justify-between my-2 max-[400px]:px-1 px-3 w-full">
				{/* Prev Btn */}
				<button
					onClick={() => handlePrevClick(index)}
					className="btn max-[400px]:p-1 rounded-full border-2 bg-primary text-lightBg focus:text-lightBg hover:text-primary">
					❮ Prev
				</button>
				{/* Project Title */}
				<div className="px-2">
					<h3 className="text-xl sm:text-3xl lg:text-3xl my-4">{`${projects[index].title}`}</h3>
				</div>
				{/* Next Btn */}
				<button
					onClick={() => handleNextClick(index)}
					className="btn max-[400px]:p-1 rounded-full border-2 bg-primary text-lightBg focus:text-lightBg hover:text-primary">
					Next ❯
				</button>
			</div>
			{/* Project Description */}
			<p className="sm:text-lg">{projects[index].description}</p>
			<div className="flex justify-around">
				{projects[index].appUrl 
					? 				<a
					className="sm:text-lg underline text-center"
					href={projects[index].appUrl}
					target="_blank">
					Deployed App
				</a> 
				: ''}
				<a
					className="sm:text-lg underline text-center"
					href={projects[index].githubUrl}
					target="_blank">
					GitHub Repo
				</a>
			</div>
		</>
	)
}
