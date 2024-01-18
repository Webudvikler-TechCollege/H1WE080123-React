import { useEffect, useState } from "react"
import { ContentWrapper } from "../ContentWrapper/ContentWrapper"

export const Effects = () => {
	const [ count, setCount ] = useState(0)

	useEffect(() => {
		setCount(count + 1)
		console.log(count);
	}, [])

  return (
	<ContentWrapper title="Eksempel på useEffect">
		<p>{count}</p>
	</ContentWrapper>
  )
}
