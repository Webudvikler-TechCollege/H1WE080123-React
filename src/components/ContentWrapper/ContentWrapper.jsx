import PropTypes from 'prop-types'

export const ContentWrapper = ({ title, children }) => {
	return (
		<>
			<h1>{title}</h1>
			<>{children}</>	
		</>
	);
}

ContentWrapper.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}