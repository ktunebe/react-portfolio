import React from 'react';
import { projects } from '../../assets/util-arrays'
import CarouselCard from '../CarouselCard'

function wrapIndex(i, len) {
  return (i + len) % len
}

function CarouselContainer() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const len = projects.length
  const prevIndex = wrapIndex(activeIndex - 1, len)
  const nextIndex = wrapIndex(activeIndex + 1, len)
  const activeProject = projects[activeIndex]

  const visible = [
    {idx: prevIndex, position: 'left'},
    {idx: activeIndex, position: 'center'},
    {idx: nextIndex, position: 'right'}
  ]

  function handlePrev() {
    setActiveIndex((i) => wrapIndex(i - 1, len))
  }

  function handleNext() {
    setActiveIndex((i) => wrapIndex(i + 1, len))
  }

  return (
  <div className=''>
    {/* Carousel */}
    <div className='flex'>
      {visible.map(({idx, position}) => (
        <CarouselCard
          key={projects[idx].title}
          project={projects[idx]}
          position={position}
          isActive={idx === activeIndex}
          onSelect={() => setActiveIndex(idx)}
          />
      ))}
    </div>
    {/* Controls */}
    <div className='text-center mx-auto relative'>
    <div className='absolute translate-y-2 flex items-center justify-between w-full'>
      <button onClick={handlePrev} className='text-3xl bg-red-500 self-center'>&larr;</button>
      <button onClick={handleNext} className='text-3xl bg-red-500 self-center'>&rarr;</button>
    </div>
      <h3 className='px-12 my-3 text-lg'>{activeProject.title}</h3>
      <p className='px-6 mt-8'>{activeProject.description}</p>
    </div>
  </div>
  )
}

export default CarouselContainer;
