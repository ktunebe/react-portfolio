import React from 'react';
import careerStages from '../../assets/util-arrays/career-stages.json'
import AboutMeCard from '../AboutMeCard/AboutMeCard';

function AboutMeContainer() {
  return (
  <div className='flex flex-col min-[900px]:flex-row min-[900px]:w-full my-10 mx-auto'>
    {careerStages.map((stage) => (
        <AboutMeCard key={stage.title} stage={stage} />
    )
    )}
    
  </div>
  )
}

export default AboutMeContainer;
