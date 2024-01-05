import { List } from "../List/List"
import { PageTitle } from "../PageTitle/PageTitle"
import styles from './Main.module.scss'

const arrItems = [
	'Tim', 'Heinz', 'Kasper', 'Bo'
]

export const Main = () => {
	return (
		<main className={styles.main}>
			<PageTitle 
				pagetitle="Velkommen til min side" 
				subtitle="Nu med en sidetitel styret af props"
				>			
			</PageTitle>
			<p>Hello</p>
			<List data={arrItems}>
				
			</List>
		</main>
	)
}