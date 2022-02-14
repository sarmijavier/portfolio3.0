import { Container } from "../../atoms/Container"
import { Image } from "../../atoms/Image"
import mainImage from '../../../static/images/undraw_programming_re_kg9v.svg'
import { H1 } from "../../atoms/H1"

export const Main = () => {

	return (
		<main className='grid grid-cols-1 mx-12 lg:grid-cols-2 justify-items-center lg:mx-16 my-32 w-100 items-center'>
			<Container design={'w-full lg:w-100 self-center'} >
				<div className="css-typing ">
					<H1 design='text-2xl lg:text-4xl text-white-50'>
						Hi!, my name
					</H1>
					<H1 design='text-2xl lg:text-4xl text-white-50'>
						is Javier Sarmiento,
					</H1>
					<H1 design='text-2xl lg:text-4xl text-white-50'>
						Full Stack Developer
					</H1>
				</div>
			</Container>
			<Container design={'mx-8 px-8 mt-8 w-full lg:mx-12 lg:px-16 '}>
				<Image alt={'mainImage'} src={mainImage} />
			</Container>
		</main>
	)
}