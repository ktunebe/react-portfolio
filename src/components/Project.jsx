import projects from '../assets/projects.json'
import { useState, useRef } from 'react'

export default function Project() {
	const [index, setIndex] = useState(0)
	const imageRefs = useRef([])
	const [translatePrevIndex, setTranslatePrevIndex] = useState(null)
	const [translateNextIndex, setTranslateNextIndex] = useState(null)

	function handlePrevClick(index) {
		setTranslatePrevIndex(index)
		setTimeout(() => {
			index - 1 >= 0 ? setIndex(index - 1) : setIndex(projects.length - 1)
			setTranslatePrevIndex(null)
		}, 500)
	}
	function handleNextClick(index) {
		setTranslateNextIndex(index)
		setTimeout(() => {
			index + 1 <= projects.length - 1 ? setIndex(index + 1) : setIndex(0)
			setTranslateNextIndex(null)
		}, 500)
	}

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
              : projects[(index - 1 + projects.length) % projects.length].imgSrc}
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
			</div>

			<div className="flex gap-3 items-center relative justify-between my-4 max-[400px]:px-1 px-3 w-full h-32">
        {/* Prev Btn */}
				<button
					onClick={() => handlePrevClick(index)}
					className="btn max-[400px]:p-1 rounded-full border-2 border-white text-white">
					❮ Prev
				</button>
        {/* Project Title */}
				<div className="px-2">
					<h3 className="text-xl sm:text-3xl lg:text-5xl my-4">{`${
						projects[index].title
					} (${index + 1}/${projects.length})`}</h3>
				</div>
        {/* Next Btn */}
				<button
					onClick={() => handleNextClick(index)}
					className="btn max-[400px]:p-1 rounded-full border-2 border-white text-white">
					Next ❯
				</button>
			</div>
      {/* Project Description */}
			<p className="sm:text-xl">{projects[index].description}</p>
		</>
	)
}
