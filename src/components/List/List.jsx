/* eslint-disable react/prop-types */
export const List = ({data}) => {

	return (
		<ul>
			{data.map((item, key) => {
				return (
					<li key={key}>{item}</li>
				)
			})}
		</ul>
	)
}