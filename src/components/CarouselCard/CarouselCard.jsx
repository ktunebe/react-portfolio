import React from 'react';

function CarouselCard({ project, isActive, position, onSelect }) {
  const base =
    "relative w-full cursor-pointer select-none rounded-2xl border border-primary-400/25 bg-bg-3/70 backdrop-blur transition duration-300"
  const scale = isActive ? "scale-[1.02]" : "scale-[0.96] opacity-80 hover:opacity-95"
  const z = isActive ? "z-20" : "z-10"
  const tilt =
    position === "left"
      ? "-rotate-1"
      : position === "right"
      ? "rotate-1"
      : "rotate-0"
  const display = position === 'center' ? '' : 'hidden sm:inline'

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`${base} ${scale} ${z} ${tilt} ${display}`}
      aria-label={`Select project ${project.title}`}
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          src={project.imgSrc}
          alt={`${project.title} screenshot`}
          className="h-40 w-full object-cover sm:h-44 md:h-48"
          loading="lazy"
        />
      </div>

      <div className="p-4 text-left">
        <h3 className="text-base font-semibold text-text-primary line-clamp-1">
          {project.title}
        </h3>

        <p className="mt-1 text-sm text-text-muted line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* subtle highlight for active */}
      {isActive && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-primary-400/40" />
      )}
    </button>
  )
}


export default CarouselCard;
