import { useState } from "react";

export const Counter = () => {
	const [ count, setCount ] = useState(0);

	return (
		<div>
			<div>{count}</div>
			<button type="button" onClick={() => setCount(count + 1)}>Tæl</button>
		</div>
	);
}