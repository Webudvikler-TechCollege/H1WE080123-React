import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss'

export const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li><NavLink to="/">Forside</NavLink></li>
				<li><NavLink to="/about">Om os</NavLink></li>
				<li><NavLink to="/counter">Counter</NavLink></li>
			</ul>
		</nav>
	);
}