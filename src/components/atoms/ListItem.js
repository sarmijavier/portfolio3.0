

export const ListItem = ({ children, design, anchor = false, setMenu, menu, mobile }) => {
	return (
		<>
			{
				anchor
				?
				<a onClick={() => mobile && setMenu(!menu)} href={anchor}>
					<li className={`${design} items-center animate__shakeX`}>{ children }</li>
				</a>
				:
				<li className={design}>{ children }</li>
			}
		</>
	)
}