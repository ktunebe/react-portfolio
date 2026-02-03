import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutMeContainer from '../components/AboutMeContainer/AboutMeContainer'
import SkillsContainer from '../components/SkillsContainer/SkillsContainer'
import ContactContainer from '../components/ContactContainer/ContactContainer'
import CarouselContainer from '../components/CarouselContainer/CarouselContainer'

export default function HomePage() {
	const sectionRefs = React.useRef({})

	const scrollToSection = (key) => {
		sectionRefs.current[key]?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}

	return (
		<>
			<Header scrollToSection={scrollToSection} />
			{/* Hero Section */}
			<Hero />
			{/* Projects Section */}
			<section
				id="projects"
				ref={(el) => {
					sectionRefs.current.projects = el
				}}
				className="mx-auto px-12 my-10">
				<h2 className="text-3xl">Featured Projects</h2>
				<CarouselContainer />
			</section>
			{/* Skills Section */}
			<section
				id="skills"
				ref={(el) => {
					sectionRefs.current.skills = el
				}}
				className="mx-auto px-12 my-10 text-text-secondary">
				<h2 className="text-3xl mb-6 min-[900px]:mb-0">My Skills</h2>
				<SkillsContainer />
			</section>
			{/* About Me Section */}
			<section
				id="about"
				ref={(el) => {
					sectionRefs.current.about = el
				}}
				className="mx-auto px-12 my-10">
				<h2 className="text-3xl border-b-2 border-primary-400/50">About Me</h2>
				<AboutMeContainer />
			</section>
			{/* Contact Me Section */}
			<section
				id="contact"
				ref={(el) => {
					sectionRefs.current.contact = el
				}}
				className="mx-auto px-12 my-10 text-text-secondary">
				<h2 className="text-3xl border-b-2 border-secondary-400/80">
					Say Hello
				</h2>
				<ContactContainer />
			</section>
		</>
	)
}
