import Up from '../../static/images/Up.svg'
import { Image } from '../atoms/Image';

export const ButtonUp = () => {

	const goUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div className='w-40 relative cursor-pointer' onClick={goUp}>
			<div className='fixed bottom-5 right-5 animate-bounce'>
				<Image design={'w-16'} src={Up} alt={'Scroll up'} />
			</div>
		</div>
	)
}