
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { projects } from "../../../staticData/data";
import { Image } from "../../atoms/Image";
import { H1 } from "../../atoms/H1";


export const CarouselComponent = () => {
	return (
		<div className="w-screen	 md:w-10/12	">
			<Carousel infiniteLoop={true} showStatus={false} >
				{
					projects.map(({ url, name, link  }) => (
						<a href={link} target="_blank" rel="noopener noreferrer">
						<div className="h-60 md:h-auto">
							<Image design={'object-cover '} src={url} />
							<H1 design='text-base	 text-white-50 '>{name}</H1>
						</div>
						</a>
					))
				}
			</Carousel>
		</div>
	)
}