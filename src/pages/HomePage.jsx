import { Outlet } from 'react-router-dom'
import Header  from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import ProjectCarousel from '../components/ProjectCarousel.jsx'
import PortfolioPage from './Portfolio.jsx'

export default function HomePage() {
	return (
		<>
			<Header />
			<Hero />
			<PortfolioPage />
			<section>

			</section>
		</>
	)
}
