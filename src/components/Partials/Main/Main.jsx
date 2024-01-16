import styles from './Main.module.scss'
import PropTypes from 'prop-types'

export const Main = ({children}) => {
	return (
		<main className={styles.main}>
			{children}
		</main>
	)
	
}

Main.propTypes = {
	children: PropTypes.object.isRequired
};
