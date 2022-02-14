import { Container } from "../../atoms/Container"
import { Image } from "../../atoms/Image"
import { ListItem } from "../../atoms/ListItem"
import { ItemsList } from "../../molecules/ItemsList"
import { SocialMediaIconsReact } from 'social-media-icons-react';
import devIcon from '../../../static/icons/icon.svg'
import { navbarData, socialIconsData } from "../../../staticData/data";


export const Navbar = () => {
	return (
		<nav className='hidden lg:flex justify-evenly items-center'>
			<Container design='m-4 cursor-pointer'>
				<Image design={'w-14'} src={devIcon} alt={"dev icon"} />
			</Container>
			<ItemsList design={"flex justify-center text-white-50 cursor-pointer"}>
				{
					navbarData.map(({ title, design, anchor }, index) => (
						<ListItem key={index} children={title} design={design} anchor={anchor} />
					))
				}
			</ItemsList>
			<Container >
				<ItemsList design={'flex m-4'}>
					{
						socialIconsData.map(({ design, icon, url, backgroundColor, iconColor, borderColor }, index) => (
							<ListItem  
								key={index}	
								design={design} 
								children={
									<SocialMediaIconsReact 
										key={index}
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
			</Container>
		</nav>
	)
}