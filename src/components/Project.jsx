import projects from '../assets/projects.json'

export default function Project({ title, description, url, imgSrc, index }) {

  function findPrevIndex() {
    return (index - 1 >= 0) ? (index - 1) : projects.length - 1
  }
  function findNextIndex() {
    return (index + 1 <= projects.length - 1) ? (index + 1) : 0
  }

  const prevIndex = findPrevIndex()
  const nextIndex = findNextIndex()
  
  return (
    <div id={`project${index}`} className="carousel-item relative w-full">
    <div>
      <div>
        <img
          src={imgSrc}
          alt={`Screenshot of ${title}`}
          className="w-full border-2 border-primary p-2" />
      </div>
        <div className="flex justify-around my-4">
          <a href={`#project${prevIndex}`} className="btn rounded-full border-2 border-white text-white">❮ Prev</a>
          <a href={`#project${nextIndex}`} className="btn rounded-full border-2 border-white text-white">Next ❯</a>
        </div>
      <h3 className='text-3xl my-4'>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
  )
}