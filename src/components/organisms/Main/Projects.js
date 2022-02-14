import { H1 } from "../../atoms/H1"
import { Section } from "../../atoms/Section"
import { CarouselComponent } from "../Carousel/CarouselComponent"


export const Projects = () => {
	return (
		<Section id='projects' design={'flex flex-col mx-16 my-32 w-100 items-center'}>
			<H1 design='text-4xl lg:text-7xl self-center text-white-50 mb-20'>Projects</H1>
			<CarouselComponent />
		</Section>
	)
}