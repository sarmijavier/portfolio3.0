const navbarData = [
	{
		title: 'About me',
		design: "m-4 rounded	hover:bg-orange-50 text-xl",
		anchor: '#aboutme'
	},
	{
		title: 'Skills',
		design: "m-4 rounded	hover:bg-orange-50 text-xl",
		anchor: '#skills'
	},
	{
		title: 'Projects',
		design: "m-4 rounded	hover:bg-orange-50 text-xl",
		anchor: '#projects'
	},
	{
		title: 'Contact me',
		design: "m-4 rounded	hover:bg-orange-50 text-xl",
		anchor: '#contact'
	}
]

const socialIconsData = [
	{
		design: "m-4 rounded	hover:bg-orange-50",
		icon: "twitter",
		url: "https://twitter.com/SarmiJavier",
		backgroundColor: '#F8FAFB',
		iconColor: "#1E3040",
		borderColor: "#F8FAFB",
		title: 'twitter'
	},
	{
		design: "m-4 rounded	hover:bg-orange-50",
		icon: "instagram",
		url: "https://www.instagram.com/sarmijavier/",
		backgroundColor: '#F8FAFB',
		iconColor: "#1E3040",
		borderColor: "#F8FAFB",
		title: 'instagram'
	},
	{
		design: "m-4 rounded	hover:bg-orange-50",
		icon: "linkedin",
		url: "https://www.linkedin.com/in/h-javier-sarmiento-y-28085a19a/",
		backgroundColor: '#F8FAFB',
		iconColor: "#1E3040",
		borderColor: "#F8FAFB",
		title: 'linkedin'
	},
	{
		design: "m-4 rounded	hover:bg-orange-50",
		icon: "github",
		url: "https://github.com/sarmijavier",
		backgroundColor: '#F8FAFB',
		iconColor: "#1E3040",
		borderColor: "#F8FAFB",
		title: 'github'
	},
]


const technologies = [
	{
		src: "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=darkgreen",
		alt: "python"
	},
	{
		src: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
		alt: "flask"
	},
	{
		src: "https://img.shields.io/badge/conda-342B029.svg?&style=for-the-badge&logo=anaconda&logoColor=white",
		alt: "conda"
	},
	{
		src: "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
		alt: "mysql"
	},
	{
		src: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
		alt: "js"
	},
	{
		src: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
		alt: "nodejs"
	},
	{
		src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
		alt: "react"
	},
	{
		src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
		alt: "tailwind"
	},
	{
		src: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
		alt: "git"
	},
	{
		src: "https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white",
		alt: "aws"
	},
	{
		src: "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
		alt: "heroku"
	},
]

const projects = [
	{
			name: 'Platzigram',
			url: 'https://github.com/sarmijavier/PlatzigramProjectCourseDjango/raw/master/imagenes/imagenes1.png',
			description: 'This project is a copy of Instagram, it was made with Django and sqlite3. This is a project of the course of Django at platzi.',
			link: 'https://github.com/sarmijavier/PlatzigramProjectCourseDjango'

	},
	{
			name: 'JSJPython',
			url: 'https://github.com/sarmijavier/PythonProjectJSJPython/raw/master/image.png',
			description: 'This project was made with the object to teach Python language programming to school students, the project was located in Usme a Bogota\'s localidad. We used Python, Flask, heroku and firebase.',
			link: 'https://github.com/sarmijavier/PythonProjectJSJPython'
	},
	{
			name: 'Fitbit App',
			url: 'https://github.com/sarmijavier/fitbit_app/raw/master/images/image.png',
			description: 'This project has the purpose to obtain data each five minutes from user, I\'ve developed the interface and logic with Js using the Fitbit API.',
			link: 'https://github.com/sarmijavier/fitbit_app'
	},
	{
			name: 'Learn To Recycle',
			url: 'https://github.com/sarmijavier/LearnToRecycle/raw/master/imagenesProyecto/imagenes1.png',
			description: 'This project is about teaching to the people to recycle, because in Bogotá the people don\'t know to recycle.',
			link: 'https://github.com/sarmijavier/LearnToRecycle'
	},
	{
			name: 'Recytech',
			url: 'https://github.com/sarmijavier/Recytech_mongoDB/raw/master/imagenesProyecto/imagenes1.png',
			description: 'Nuestro objetivo es crear una plataforma web que permita la interacción entre los usuarios de la comunidad de Engativa con el fin de que aprendan y se puedan colaborar en comunidad al desechar residuos electrónicos, ya que esta es una gran problemática hoy en día',
			link: 'https://github.com/sarmijavier/Recytech_mongoDB'
	},
	{
			name: 'Todo',
			url: 'https://github.com/sarmijavier/TodoWithFlaskCourse/raw/master/images/imagenes1.png',
			description: 'This project is a todo list, it was made with Flask, blueprint and firebase. This is a project of the course of Flas at platzi.',
			link: 'https://github.com/sarmijavier/TodoWithFlaskCourse'
	},
]
export {
	navbarData,
	socialIconsData,
	technologies,
	projects
}