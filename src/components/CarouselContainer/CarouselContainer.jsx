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
  <>
    {/* Carousel */}
    <div className='flex mt-6'>
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
    <div className='relative text-center mx-auto max-w-[800px]'>
    <div className='absolute -translate-y-3 flex items-center justify-between w-full'>
      <button onClick={handlePrev} className='arrow-button'><img className='size-12 sm:size-14' src='/logos-images/icons8-arrow-l.svg' alt='Left arrow icon by Icons8'/></button>
      <button onClick={handleNext} className='arrow-button'><img className='size-12 sm:size-14' src='/logos-images/icons8-arrow-r.svg' alt='Right arrow icon by Icons8'/></button>
    </div>
      <h3 className='px-14 my-6 text-lg sm:text-2xl'>{activeProject.title}</h3>
      <p className='px-6 mt-8 font-normal text-sm md:text-base'>{activeProject.description}</p>
    </div>
  </>
  )
}

export default CarouselContainer;
