import React from 'react'

function CarouselCard({ project, isActive, position, onSelect }) {
	const base =
		'relative w-full select-none rounded-2xl border border-primary-400/25 bg-primary-600/20 backdrop-blur transition duration-300'
	const scale = isActive
		? 'scale-[1.02]'
		: 'scale-[0.96] opacity-80 hover:opacity-95'
	const z = isActive ? 'z-20' : 'z-10'
	const tilt =
		position === 'left'
			? '-rotate-1'
			: position === 'right'
			? 'rotate-1'
			: 'rotate-0'
	const display = position === 'center' ? '' : 'hidden sm:inline'
	const cursor = isActive ? 'cursor-default' : 'cursor-pointer'

	return (
		<button
			type="button"
			onClick={onSelect}
			className={`${base} ${scale} ${z} ${tilt} ${display} ${cursor} self-start`}
			aria-label={`Select project ${project.title}`}>
			<div className="overflow-hidden rounded-2xl">
				<img
					src={project.imgSrc}
					alt={`${project.title} screenshot`}
					className="block h-40 w-full object-cover sm:h-44 md:h-48"
					loading="lazy"
				/>
			</div>

			<div className="text-center">
				<h3 className="text-lg text-text-primary py-4">{project.title}</h3>

				<div
					className={`flex divide-primary-400/25 text-center border-t-2 border-primary-400/25 justify-around ${
						!isActive && 'hidden'
					}`}>
					{project.appUrl && (
						<a
							href={project.appUrl}
							className={`py-2 bg-primary-glow/90 hover:bg-primary-600/60 ${
								project.githubUrl
									? 'border-r-2 border-primary-600/80 w-1/2 rounded-bl-2xl'
									: 'w-full rounded-b-2xl'
							}`}>
							View App
						</a>
					)}
					{project.githubUrl && (
						<a
							href={project.githubUrl}
							className={`py-2 bg-primary-glow/90 hover:bg-primary-600/60 ${
								project.appUrl ? 'w-1/2 rounded-br-2xl' : 'w-full rounded-b-2xl'
							}`}>
							View Code{' '}
						</a>
					)}
				</div>
			</div>

			{/* subtle highlight for active */}
			{isActive && (
				<div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-primary-400/40" />
			)}
		</button>
	)
}

export default CarouselCard
