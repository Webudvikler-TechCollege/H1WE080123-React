import { List } from "../List/List"
import { PageTitle } from "../PageTitle/PageTitle"

const arrItems = [
	'Tim', 'Heinz', 'Kasper', 'Bo'
]

export const Main = () => {
	return (
		<main>
			<PageTitle 
				pagetitle="Velkommen til min side - nu med en sidetitel styret af props" >			
			</PageTitle>
			<List data={arrItems}>
				
			</List>
		</main>
	)
}