import React from 'react'

function SkillsCard({ card }) {
	return (
		<div
			key={card.id}
			className="flex-1 text-center border bg-secondary-500/15 border-secondary-400/80 rounded-xl">
			<h3 className="text-center text-2xl py-2 border-b border-secondary-400/80">{card.subheading}</h3>
			<ul className="font-normal p-3 text-left">
				{card.subpoints.map((subpoint, index) => (
					<li key={index}>{subpoint}</li>
				))}
			</ul>
			<p className="border-t border-secondary-400/80 py-3 text-lg">{card.comfortLevel}</p>
		</div>
	)
}

export default SkillsCard
