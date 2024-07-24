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
    <div id={`slide${index}`} className="carousel-item relative w-full">
    <img
      src={imgSrc}
      alt={`Screenshot of ${title}`}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href={`#slide${prevIndex}`} className="btn btn-circle">❮</a>
      <a href={`#slide${nextIndex}`} className="btn btn-circle">❯</a>
    </div>
  </div>
  )
}