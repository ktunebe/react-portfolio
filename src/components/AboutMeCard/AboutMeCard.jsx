import React from 'react';

function AboutMeCard({stage}) {
  return (
  <div className='border-t-gradient flex-1 flex flex-col border border-border-strong/80 bg-primary-glow/10 py-8'>
    <img className='on-border-pill-top shadow-primary-glow size-12' src={stage.iconUrl} />
    <h3 className='text-2xl text-center h-20 px-4'>{stage.title}</h3>
    <ul className='mx-8'>
      {stage.snippets.map((snippet, index) => (
        <li
        key={index}
        className='my-2 font-normal list-disc'
        >{snippet}</li>
      ))}
    </ul>

  </div>
  )
}

export default AboutMeCard;
