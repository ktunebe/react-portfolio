const profileLinks = [
  {
    name: 'LinkedIn',
    logoSrc: "/logos-images/linkedin-2021.svg",
    url: 'https://www.linkedin.com/in/kent-tuneberg-59a191320/',
  },
	{
		name: 'GitHub',
		logoSrc: "/logos-images/github-logo-vector.svg",
		url: 'https://github.com/ktunebe',
	},
	{
		name: 'Stack Overflow',
		logoSrc: "/logos-images/stack-overflow-logo.svg",
		url: 'https://stackoverflow.com/users/20881411/kent-tuneberg',
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
            <a key={profileLink.name} href={profileLink.url} target="_blank" className="w-[20%]">
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
