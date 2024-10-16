import projects from '../assets/my-portfolio/projects.json'
import ProjectCarousel from '../components/ProjectCarousel'
import { useState } from 'react'

export default function PortfolioPage() {

  const [index, setIndex] = useState(0)
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

  function handleIndexClick(index) {
    setIndex(index)
  }

  return (
    <div className='container my-4 mx-auto text-center text-primary w-[80%] lg:w-[60%]'>
      <h2 className='text-3xl sm:text-4xl'>Projects</h2>

      <ProjectCarousel 
        projects={projects}
        index={index} 
        handleNextClick={handleNextClick} 
        handlePrevClick={handlePrevClick} 
        handleIndexClick={handleIndexClick}
        translateNextIndex={translateNextIndex} 
        translatePrevIndex={translatePrevIndex}
      />
      
    </div>
  )
}
