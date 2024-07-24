import projects from '../assets/projects.json'
import Project from '../components/Project'

export default function Portfolio() {
  return (
    <div className="carousel w-1/2">
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
  )
}
