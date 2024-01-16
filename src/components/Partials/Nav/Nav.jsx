import { NavLink } from "react-router-dom"
import styles from './Nav.module.scss'

export const Nav = () => {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/about">Om os</NavLink></li>
				
				<li><NavLink to="/components">Komponenter & Props</NavLink>
					<ul>
						<li><NavLink to="/list">List & Arrays</NavLink></li>
						<li><NavLink to="/counter">Counter</NavLink></li>
						<li><NavLink to="/todolist">ToDo List</NavLink></li>
					</ul>				
				</li>

				<li><NavLink to="/greetings">useState Hooks</NavLink>
					<ul>
						<li><NavLink to="/greetings">Greeting</NavLink></li>
						<li><NavLink to="/counter">Counter</NavLink></li>
						<li><NavLink to="/todolist">ToDo List</NavLink></li>
					</ul>
				</li>
			</ul>
		</nav>
	)
}