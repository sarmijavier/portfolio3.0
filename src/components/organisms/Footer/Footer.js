import { ListItem } from "../../atoms/ListItem"
import { ItemsList } from "../../molecules/ItemsList"
import { SocialMediaIconsReact } from 'social-media-icons-react';
import { socialIconsData } from "../../../staticData/data";
import { H1 } from "../../atoms/H1";
import { Section } from "../../atoms/Section";



export const Footer = () => {
	return (
		<footer id='contact' className='flex justify-center p-16 text-center'>
			<Section>
			<H1 design='text-2xl lg:text-5xl self-center text-white-50'>Contact Me</H1>
				<ItemsList design={'flex justify-center'}>
					{
						socialIconsData.map(({ design, icon, url, backgroundColor, iconColor, borderColor }) => (
							<ListItem
								design={design}
								children={
									<SocialMediaIconsReact
										icon={icon}
										url={url}
										backgroundColor={backgroundColor}
										iconColor={iconColor}
										borderColor={borderColor}
									/>}
							/>
						))
					}
				</ItemsList>
				<H1 design='text-sm	 md:text-2xl text-white-50'>
					Made with ❤ by Javier Sarmiento.
				</H1>
			</Section>
		</footer>
	)
}