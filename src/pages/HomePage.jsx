import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutMeContainer from '../components/AboutMeContainer/AboutMeContainer'

export default function HomePage() {
	const sectionRefs = React.useRef({})

	const scrollToSection = (key) => {
		console.log("Scrolling to " + key)
		sectionRefs.current[key]?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}

	return (
		<>
			<Header scrollToSection={scrollToSection} />
			<Hero />
			<section
				id="projects"
				ref={(el) => {
					sectionRefs.current.projects = el
				}}
				className="mx-auto px-12"
				>
				<h2 className="text-3xl">Featured Projects</h2>
			</section>
			<section
				id="skills"
				ref={(el) => {
					sectionRefs.current.skills = el
				}}
				className="mx-auto px-12"
				>
				<h2 className="text-3xl">My Skills</h2>
			</section>
			<section
				id="about"
				ref={(el) => {
					sectionRefs.current.about = el
				}}
				className="mx-auto px-12"
				>
				<h2 className="text-3xl">About Me</h2>
				<AboutMeContainer />
			</section>
			<section
				id="contact"
				ref={(el) => {
					sectionRefs.current.contact = el
				}}
				className="mx-auto px-12"
				>
				<h2 className="text-3xl">Say Hello</h2>
			</section>
		</>
	)
}

