import { NavBar } from '../NavBar/NavBar'
import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.headerWrapper}>
			<h1>MyCustomShop</h1>
			<NavBar />
		</header>
	)
}