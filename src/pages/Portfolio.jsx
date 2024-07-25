import projects from '../assets/projects.json'
import Project from '../components/Project'

export default function PortfolioPage() {
  return (
    <div className='container my-8 mx-auto text-center w-[80%]'>
      <h2 className='text-3xl sm:text-5xl font-bold mb-8'>Projects</h2>

      <Project />

    </div>
  )
}
