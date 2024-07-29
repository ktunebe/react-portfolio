const profileLinks = [
  {
    name: 'LinkedIn',
    logoSrc: "./src/assets/linkedin-2021.svg",
    url: null,
  },
	{
		name: 'GitHub',
		logoSrc: "./src/assets/github-logo-vector.svg",
		url: null,
	},
	{
		name: 'Stack Overflow',
		logoSrc: "./src/assets/stack-overflow-logo.svg",
		url: null,
	},
]

export default function Footer() {
	return (
		<footer className="h-[11.75vh] flex items-center justify-between lg:justify-end bg-primary text-lightBg max-w-[1200px]">
				<div className="pl-4 w-1/2 lg:w-1/6">
					<h2>Kent Tuneberg</h2>
					<h3>ktunebe@gmail.com</h3>
					<h3>(815)-621-5184</h3>
				</div>
				<div className="flex justify-evenly items-center w-1/2 lg:w-1/3">
        {profileLinks.map((profileLink) => {
          return (
            <a key={profileLink.name} href="https://github.com/your-profile" target="_blank" className="w-[20%]">
						<img
							src={profileLink.logoSrc}
							alt={`${profileLink.name} Logo`}
						/>
					</a>
          )
        })}
				</div> 
		</footer>
	)
}
