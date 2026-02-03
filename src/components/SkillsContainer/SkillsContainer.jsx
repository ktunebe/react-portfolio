import React from 'react'
import { skillsTabs } from '../../assets/util-arrays.js'
import SkillsCard from '../SkillsCard/SkillsCard.jsx'
function SkillsContainer() {
	const [activeTab, setActiveTab] = React.useState('all')

	const activeTabData = skillsTabs.find((tab) => tab.id === activeTab)

	return (
		<div className="relative flex flex-col md:flex-row gap-3 min-[500px]:w-3/4 md:w-full border-t-2 border-secondary-400/80 py-10 mx-auto">
			<div className="on-border-pill-top shadow-secondary-400 top-0 p-0 flex w-full sm:w-3/4 min-[900px]:w-1/2 text-xs sm:text-sm md:text-base divide-x-2 divide-secondary-400/80 items-stretch">
				{skillsTabs.map((skill, index) => (
					<button
						key={skill.id}
						id={skill.id}
						onClick={() => setActiveTab(skill.id)}
						className={`flex-1 p-2 ${index === 0 && 'rounded-l-full'} ${index === skillsTabs.length - 1 && 'rounded-r-full'} ${activeTab === skill.id && 'bg-secondary-500/40'}`}>
						{skill.label}
					</button>
				))}
			</div>
			{activeTabData.cards.map((card) => (
				<SkillsCard key={card.id} card={card} />
			))}
		</div>
	)
}

export default SkillsContainer
