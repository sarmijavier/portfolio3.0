import { Container } from "../../atoms/Container"
import { Image } from "../../atoms/Image"
import devIcon from '../../../static/icons/icon.svg'
import { useEffect, useState } from "react"
import { ItemsList } from "../../molecules/ItemsList"
import { ListItem } from "../../atoms/ListItem"
import { navbarData } from "../../../staticData/data"



export const NavbarMobile = () => {

	const [menu, setMenu] = useState(false)


	function disableScroll() {
		document.body.classList.add("stop-scrolling");
	}

	function enableScroll() {
		document.body.classList.remove("stop-scrolling");
	}

	useEffect(() => {
		if (menu) {
			disableScroll()
		}else {
			enableScroll()
		}
	}, [menu])

	return (
		<div className="lg:hidden">
			<div className="flex justify-between">
				<Container design='m-4 cursor-pointer'>
					<Image design={'w-14'} src={devIcon} alt={"dev icon"} />
				</Container>
				<svg onClick={() => setMenu(!menu)} class=" m-4 block h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#F8FAFB" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</div>
			{
				menu &&
				<div className="absolute w-full h-full z-10	bg-blue-50 overflow-hidden	">
					<ItemsList design={"flex flex-col items-center text-white-50 cursor-pointer"}>
						{
							navbarData.map(({ title, design, anchor }, index) => (
								<ListItem key={index} children={title} design={design} anchor={anchor} setMenu={setMenu} menu={menu} mobile={true} />
							))
						}
					</ItemsList>
				</div>
			}
		</div>
	)
}