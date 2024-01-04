export const List = props => {
	console.log(props.data);

	return (
		<ul>
			{props.data.map((item, key) => {
				return (
					<li key={key}>{item}</li>
				)
			})}
		</ul>
	)
}