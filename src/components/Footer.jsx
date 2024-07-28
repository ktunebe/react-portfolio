const profileLinks = [
	{
		name: 'GitHub',
		logo: null,
		url: null,
	},
	{
		name: 'LinkedIn',
		logo: null,
		url: null,
	},
	{
		name: 'Stack Overflow',
		logo: null,
		url: null,
	},
]

export default function Footer() {
	return (
		<footer className="h-[11.75vh] flex justify-between lg:justify-end bg-primary text-lightBg max-w-[1200px]">
				<div className="text-center w-1/2 lg:w-1/4">
					<h2>Kent Tuneberg</h2>
					<h3>ktunebe@gmail.com</h3>
					<h3>(815)-621-6184</h3>
				</div>
				<div className="flex justify-evenly items-center w-1/2 lg:w-3/4">
					<a href="https://github.com/your-profile" target="_blank" className="w-[20%]">
						<img
							src="./src/assets/github-logo-vector.svg"
							alt="GitHub Logo"
							
						/>
					</a>
					<a href="https://github.com/your-profile" target="_blank" className="w-[20%]">
						<img
							src="./src/assets/linkedin-2021.svg"
							alt="GitHub Logo"
							
						/>
					</a>
					<a href="https://github.com/your-profile" target="_blank" className="w-[20%]">
						<img
							src="./src/assets/stack-overflow-logo.svg"
							alt="GitHub Logo"
							
						/>
					</a>
				</div> 
		</footer>
	)
}
