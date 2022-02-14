

export const Section = ({ id, design, children }) => {
	return (
		<section id={id} className={design}>
			{children}
		</section>
	)
}