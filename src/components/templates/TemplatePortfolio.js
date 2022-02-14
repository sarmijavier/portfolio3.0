
import { ButtonUp } from '../molecules/ButtonUp';
import { Footer } from '../organisms/Footer/Footer';
import { Navbar } from '../organisms/Navbar/Navbar';
import { NavbarMobile } from '../organisms/Navbar/NavbarMobile';


export const TemplatePorfolio = ({ children }) => {


	return (
		<div className="w-full h-full bg-blue-50 font-mono">
			<Navbar />
			<NavbarMobile />
				{children}
			<ButtonUp/>
			<Footer />
		</div>
	)
}