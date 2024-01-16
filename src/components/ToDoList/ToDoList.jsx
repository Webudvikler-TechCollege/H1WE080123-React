import { useState } from "react";
import { ContentWrapper } from "../ContentWrapper/ContentWrapper";

export const ToDoList = () => {
	const [ data, setData ] = useState([])

	const handleSubmit = e => {
		e.preventDefault()
		setData(prevData => [...prevData, e.target.task.value]);
		localStorage.setItem('tasks', data)
	}

	return (
		<ContentWrapper title="ToDoList">
			<form onSubmit={handleSubmit}>
				<input type="text" id="task" />
				<button type="submit">Tilføj</button>
			</form>
			<div>
				<ol>
					{data && data.map((item, index) => {
						return (
							<li key={index}>{item}</li>
						)
					})}
				</ol>
			</div>
		</ContentWrapper>
	);
}