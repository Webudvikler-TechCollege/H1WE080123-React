import { useState } from "react";
import { ContentWrapper } from "../ContentWrapper/ContentWrapper";

export const Counter = () => {
	const [ count, setCount ] = useState(0);

	const Count = () => {
		setCount(count + 1)		
	}

	return (
		<ContentWrapper title="Counter">
			<div>{count}</div>
			<button type="button" onClick={Count}>Tæl</button>
		</ContentWrapper>
	);
}