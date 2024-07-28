const navItems = [
	{
		href: '/',
		label: 'About Me',
	},
	{
		href: '/portfolio',
		label: 'Portfolio',
	},
	{
		href: '/resume',
		label: 'Resume',
	},
	{
		href: '/contact',
		label: 'Contact Me',
	},
]

export default function Nav() {
	return (
		<div>
			<div className="dropdown dropdown-bottom dropdown-end md:hidden">
				<div tabIndex={0} role="button" className="btn m-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block h-5 w-5 stroke-current">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</div>
				<ul
					tabIndex={0}
					className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
					{navItems.map((navItem) => {
						return (
							<a href={navItem.href} key={navItem.href} className="block">
								{navItem.label}
							</a>
						)
					})}
				</ul>
			</div>
			<div className="hidden md:flex space-x-4">
				{navItems.map((navItem) => (
					<a
						href={navItem.href}
						key={navItem.href}
						className="btn bg-primary text-lightBg">
						{navItem.label}
					</a>
				))}
			</div>
		</div>
	)
}
