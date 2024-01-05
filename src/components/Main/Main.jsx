import { List } from "../List/List"
import { PageTitle } from "../PageTitle/PageTitle"
import styles from './Main.module.scss'
import WaterFall from '../../assets/images/vandfald.jpg'
import { Image } from "../Image/Image"

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
			<img src={WaterFall} alt="Waterfall"></img>
			<Image file={WaterFall} alt="Vandfald" />
			<List data={arrItems}>
				
			</List>
		</main>
	)
}