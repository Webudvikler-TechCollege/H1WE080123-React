import { useEffect, useState } from "react"
import { ContentWrapper } from "../ContentWrapper/ContentWrapper"
import styles from './FetchData.module.scss'
import axios from 'axios'

export const FetchData = () => {
	const [ goals, setGoals ] = useState([])

	useEffect(() => {
		// Function declaration
		const getData = async () => {
			const url = "https://api.mediehuset.net/sdg/goals"

			try {
				const result = await axios.get(url)
				setGoals(result.data.items);
			} catch (error) {
				console.error(`Fejl i fetch af verdensmål: ${error}`)
			}
		}

		// Function call
		getData()
	}, [setGoals])

  return (
	<ContentWrapper title="Fetch Data">
		<ul className={styles.goalslist}>
			{goals.map(item => {
				return (
					<li key={item.id}>
						<img src={item.image} alt={item.title} />
						{item.title}
					</li>
				)
			})}
		</ul>
	</ContentWrapper>
  )
}
