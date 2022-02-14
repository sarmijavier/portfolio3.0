

export const Container = ({ children, design }) => {
	return (
		<div className={design}>
			{children}
		</div>
	)
}