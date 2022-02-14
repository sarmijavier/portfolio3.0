import { technologies } from "../../staticData/data"
import { Container } from "../atoms/Container"
import { Image } from "../atoms/Image"


export const Technologies = ({ design }) => {
	return (
		<Container design={design}>
		{
			technologies.map(({ src, alt }) => (
				<Image design={'w-full m-4'} src={src} alt={alt} />
			))
		}
		</Container>
	)
}