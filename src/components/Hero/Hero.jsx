export default function Hero() {
	return (
		<div className="relative border-b-8 w-full border-primary-400/30 my-8">
			<div className="flex flex-col items-center text-center max-w-1/2 p-6">
				<h2 className="text-4xl">Kent Tuneberg</h2>
				<p className="py-4">
					<span>Frontend Developer</span><span className="mx-4">&middot;</span><span>MS CS</span>
					<span className="mx-4">&middot;</span><span>Dentist &rarr; Dev</span>
				</p>
				<hr className="w-1/2 border-primary-glow/50" />
				<p className="py-4">Building modern, responsive apps.</p>
			</div>
			<div className="on-border-pill-bottom">
				<span className="mx-2 text-primary-glow hidden sm:inline">
					&middot;
				</span>
				<span className="mx-2">React</span>
				<span className="mx-2 text-primary-glow">&middot;</span>
				<span className="mx-2">Javascript</span>
				<span className="mx-2 text-primary-glow">&middot;</span>
				<span className="mx-2">Next.js</span>
				<span className="mx-2 text-primary-glow hidden sm:inline">
					&middot;
				</span>
				<span className="mx-2 hidden sm:inline">MongoDB</span>
				<span className="mx-2 text-primary-glow hidden sm:inline">
					&middot;
				</span>
			</div>
		</div>
	)
}
