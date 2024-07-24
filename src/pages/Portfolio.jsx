import projects from '../assets/projects.json'
import Project from '../components/Project'

export default function Portfolio() {
  return (
    <div className='container my-8 mx-auto text-center'>
      <h2 className='text-5xl font-bold mb-8'>Projects</h2>
      <div className="carousel w-3/4">
      {
        projects.map((project, index) => {
          return (
            <Project
              title={project.title}
              description={project.description}
              url={project.url}
              imgSrc={project.imgSrc}
              index={index}
              key={project.title} />
          )
        })
      }
      </div>
    </div>
  )
}
