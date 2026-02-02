export default function Hero() {
	return (
		<>
			<div className="flex flex-col items-center text-center max-w-1/2 px-6">
				<h2 className="text-4xl">Kent Tuneberg</h2>
				<p className="py-4">
					Frontend Developer<span className="mx-4">&middot;</span>MS CS
					<span className="mx-4">&middot;</span>Dentist &rarr; Dev
				</p>
				<hr className="w-1/2 border-primary-glow/50" />
				<p className="py-4">Building modern, responsive apps.</p>
			</div>
			<fieldset className="border-t-8 w-full border-primary-400/30 my-6">
				<legend className="text-center bg-primary-500/10 shadow-primary-glow shadow-sm px-4 py-2 rounded-3xl">
					<div>
						<span className="mx-4 text-primary-glow hidden sm:inline">&middot;</span>
						<span>React</span>
						<span className="mx-4 text-primary-glow">&middot;</span>
						<span>Javascript</span>
						<span className="mx-4 text-primary-glow">&middot;</span>
						<span>Next.js</span>
						<span className="mx-4 text-primary-glow hidden sm:inline">&middot;</span>
						<span className="hidden sm:inline">MongoDB</span>
						<span className="mx-4 text-primary-glow hidden sm:inline">&middot;</span>
					</div>
				</legend>
			</fieldset>
		</>
	)
}
