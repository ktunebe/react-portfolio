import React from 'react'

function SkillsCard({ card }) {
	return (
		<div
			key={card.id}
			className="flex-1 text-center border bg-secondary-500/20 border-secondary-400/80 rounded-xl">
			<h3 className="text-center text-2xl py-2 border-b border-secondary-400/80">{card.subheading}</h3>
			<ul className="font-normal py-3 text-left">
				{card.subpoints.map((subpoint, index) => (
					<li key={index}>{subpoint}</li>
				))}
			</ul>
			<p className="border-t border-secondary-400/80">{card.comfortLevel}</p>
		</div>
	)
}

export default SkillsCard
