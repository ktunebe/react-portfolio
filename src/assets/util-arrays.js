export const careerStages = [
	{
		title: "Bachelor's + Doctorate",
		snippets: [
			'2007–2015',
			'Augustana College - BS in Biology',
			'Southern Illinois University - DMD',
		],
		iconUrl: '/logos-images/icons8-graduation-cap-50.png',
		iconAlt: 'Graduation Cap icon by Icons8',
	},
	{
		title: 'Practicing Dentist',
		snippets: [
			'2015–2023',
			'Process-driven problem solving in high-stakes environments',
			'Workflow optimization, documentation, and compliance-heavy systems',
			'Medical event → career change',
		],
		iconUrl: '/logos-images/icons8-tooth-100.png',
		iconAlt: 'Tooth icon by Icons8',
	},
	{
		title: 'Computer Science',
		snippets: [
			'2024–Present',
			'University of Wisconsin - Full-Stack Web Development Certificate (4.0 GPA)',
			'Stevens Institute of Technology - MS in CS (in progress, 4.0 GPA)',
			'Teaching Assistant - Algorithms (CS-570)',
		],
		iconUrl: '/logos-images/icons8-informatics-64.png',
		iconAlt: 'Informatics icon by Icons8',
	},
	{
		title: 'Frontend Developer',
		snippets: [
			'Present',
			'Designing and building production-ready React applications',
			'Focused on clean UI systems, performance, and accessibility',
		],
		iconUrl: '/logos-images/icons8-development-100.png',
		iconAlt: 'Development icon by Icons8',
	},
]

export const skillsTabs = [
	{
		id: 'all',
		label: 'All',
		cards: [
			{
				id: 'frontend-summary',
				subheading: 'Frontend',
				subpoints: ['React', 'Tailwind', 'UI components'],
				comfortLevel: 'Strong',
			},
			{
				id: 'backend-summary',
				subheading: 'Backend',
				subpoints: ['MongoDB', 'Auth + CRUD', 'Node/Express APIs'],
				comfortLevel: 'Comfortable',
			},
			{
				id: 'quality-summary',
				subheading: 'Quality',
				subpoints: ['Input validation', 'Error handling', 'Schema design'],
				comfortLevel: 'Strong',
			},
		],
	},
	{
		id: 'frontend',
		label: 'Frontend',
		cards: [
			{
				id: 'ui-systems',
				subheading: 'UI Systems',
				subpoints: [
					'Reusable components',
					'Design consistency',
					'Accessibility',
				],
				comfortLevel: 'Strong',
			},
			{
				id: 'react-state',
				subheading: 'React',
				subpoints: ['Hooks + state', 'Routing', 'Component composition'],
				comfortLevel: 'Strong',
			},
			{
				id: 'styling',
				subheading: 'Styling & Layout',
				subpoints: ['Tailwind', 'Responsive design', 'Motion + polish'],
				comfortLevel: 'Strong',
			},
		],
	},
	{
		id: 'backend',
		label: 'Backend',
		cards: [
			{
				id: 'apis',
				subheading: 'API Development',
				subpoints: ['REST endpoints', 'Controllers/services', 'Pagination'],
				comfortLevel: 'Comfortable',
			},
			{
				id: 'auth',
				subheading: 'Auth & Security',
				subpoints: ['Sessions/JWT', 'Protected routes', 'Sanitization'],
				comfortLevel: 'Comfortable',
			},
			{
				id: 'databases',
				subheading: 'Databases',
				subpoints: [
					'MongoDB + PostgreSQL',
					'Schema modeling',
					'Query patterns',
				],
				comfortLevel: 'Strong',
			},
		],
	},
	{
		id: 'quality',
		label: 'Quality',
		cards: [
			{
				id: 'validation',
				subheading: 'Validation',
				subpoints: ['Input checking', 'Type guards', 'Edge cases'],
				comfortLevel: 'Strong',
			},
			{
				id: 'errors',
				subheading: 'Error Handling',
				subpoints: [
					'Consistent error shapes',
					'HTTP status discipline',
					'Fallbacks',
				],
				comfortLevel: 'Strong',
			},
			{
				id: 'data-quality',
				subheading: 'Data Quality',
				subpoints: ['Normalization', 'Constraints', 'Defensive coding'],
				comfortLevel: 'Comfortable',
			},
		],
	},
]

export const projects = [
	{
		title: 'MyMRI Business Website',
		description:
			"Developed and deployed MyMRI’s business website using Squarespace, creating a professional online presence for the company based on client's design requirements.",
		githubUrl: null,
		appUrl: 'https://mymri-illinois.com/',
		imgSrc: '/project-screenshots/mymri-homepage.png',
	},
	{
		title: 'My Recipe Book',
		description:
			'A responsive recipe management application developed with React where users can search recipes, dynamically adjust servings, and interact with ingredient popups, built using React, Vite, Tailwind CSS, React Router, and static JSON architecture and deployed statically on AWS with Amplify.',
		githubUrl: 'https://github.com/ktunebe/react-recipe-book',
		appUrl: 'https://main.dxyk5m4fpxby4.amplifyapp.com/',
		imgSrc: '/project-screenshots/recipe-book.jpg',
	},
	{
		title: "Web Wizard's Lair",
		description:
			'A coding challenge game developed with React in which users create an account, choose an avatar and solve coding problems in an embedded code editor. This utilizes React, GraphQL, MongoDB, Mongoose, Express, Node, and TailwindCSS, among other disciplines.',
		githubUrl: 'https://github.com/ktunebe/web-wizards-lair',
		appUrl: 'https://web-wizards-lair-namt.onrender.com/',
		imgSrc: '/project-screenshots/wwl-screenshot.png',
	},
	{
		title: 'Dungeons and Dragonites',
		description:
			'A dungeon crawl game using PokeAPI and D&D 5e API. Use a random Pokémon to fight an endless barrage of D&D monsters. Utilizes JS for battle mechanics and CSS animations/TailwindCSS for battle display.',
		githubUrl: 'https://github.com/ktunebe/dungeons_and_dragonites',
		appUrl: 'https://ktunebe.github.io/dungeons_and_dragonites',
		imgSrc: '/project-screenshots/d-d-battle.png',
	},
	{
		title: 'console.blog',
		description:
			'A blog allowing users to add posts and comment on others using a Model-View-Controller Framework with Handlebars.js and a PostgreSQL database.',
		githubUrl:
			'https://github.com/ktunebe/magnificent-virtual-compositions-tech-blog',
		appUrl: 'https://mvc-tech-blog-65rn.onrender.com',
		imgSrc: '/project-screenshots/blog-dashboard.png',
	},
	{
		title: 'Weather Dashboard',
		description:
			'A weather dashboard that will display the current weather and five day forecast for a selected city using the OpenWeather API.',
		githubUrl: 'https://github.com/ktunebe/weather-dashboard',
		appUrl: 'https://ktunebe.github.io/weather-dashboard/',
		imgSrc: '/project-screenshots/weather-dashboard-page.png',
	},
	{
		title: 'Employee Database Manager',
		description:
			"A command line application to manage a company's employee database using Node.js, Inquirer and PostgreSQL.",
		githubUrl: 'https://github.com/ktunebe/sql-employee-db',
		appUrl: null,
		imgSrc: '/project-screenshots/employee-tracker.png',
	},
	{
		title: 'Task Board',
		description:
			'A task board made using JQuery UI with draggable/droppable tasks and lanes specifying their progress.',
		githubUrl: 'https://github.com/ktunebe/jquery-task-board',
		appUrl: 'https://ktunebe.github.io/jquery-task-board/',
		imgSrc: '/project-screenshots/task-board-page.png',
	},
	{
		title: 'NoSQL Social Network',
		description:
			'A back end for a social network API using express, MongoDB and the Mongoose npm.',
		githubUrl: 'https://github.com/ktunebe/social-network-api',
		appUrl: null,
		imgSrc: '/project-screenshots/social-network.png',
	},
	{
		title: 'HoliDB',
		description:
			'A movie search database using the TMDB node package to find movies, tag them by holiday, or even create your own holiday. This uses PostgreSQL and Sequelize to keep track of users, movies and holidays.',
		githubUrl: 'https://github.com/ktunebe/holiDB',
		appUrl: 'https://holidb.onrender.com',
		imgSrc: '/project-screenshots/holiDB.png',
	},
]
