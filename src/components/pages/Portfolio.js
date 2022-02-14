
import { AboutMe } from '../organisms/Main/AboutMe';
import { Main } from '../organisms/Main/Main';
import { Projects } from '../organisms/Main/Projects';
import { Skills } from '../organisms/Main/Skills';
import { TemplatePorfolio } from '../templates/TemplatePortfolio';

export const Portfolio = () => {


	return (
			<TemplatePorfolio>
				<Main />
				<AboutMe />
				<Skills />
				<Projects />
			</TemplatePorfolio>
	)

}