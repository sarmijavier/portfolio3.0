import { Container } from "../../atoms/Container"
import { H1 } from "../../atoms/H1"
import { Image } from "../../atoms/Image"
import { P } from "../../atoms/P"
import { Section } from "../../atoms/Section"
import profileImage from '../../../static/images/profile.jpg'


export const AboutMe = () => {
	return (
		<Section id='aboutme' design={'flex flex-col mx-16 my-32 w-100 items-center'}>
			<H1 design='text-4xl lg:text-7xl self-center text-white-50 mb-20'>About Me</H1>
			<Container design='grid grid-cols-1 lg:grid-cols-2	items-center'>
				<Image design={'rounded-full w-7/12	 justify-self-center	'} alt={'profile image'} src={profileImage} />
				<P design='text-2xl lg:text-4xl w-100 justify-self-center text-white-50'>I've been working on projects with Python, Js and agile methodologies. Besides, I'm intresting in data science and Web3.0</P>
			</Container>
		</Section>
	)
}