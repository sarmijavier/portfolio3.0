import { H1 } from "../../atoms/H1"
import { Section } from "../../atoms/Section"
import { Technologies } from "../../molecules/Technologies"

export const Skills = () => {
	return (
		<Section id='skills' design={'flex flex-col mx-16 my-32 w-100 items-center'}>
			<H1 design='text-4xl lg:text-7xl self-center text-white-50 mb-20'>Skills</H1>
			<Technologies design={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 justify-items-center"}/>
		</Section>
	)
}