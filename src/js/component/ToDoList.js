import React, { useState } from "react";

export const ToDoList = () => {
	const [input, setInput] = useState("");
	const [items, setItems] = useState([]);

	const inputTask = e => {
		setInput(e.target.value);
	};

	const addItem = event => {
		//evitar procesamiento automático de datos
		event.preventDefault();
		setItems([
			...items,
			{
				id: items.length + 1,
				text: input
			}
		]);
		resetInputFields();
	};

	const resetInputFields = () => {
		setInput("");
	};

	const deleteItem = inputId => {
		const updatedItems = items.filter(input => input.id !== inputId);
		setItems(updatedItems);
	};

	return (
		<div className="container">
			<h1>To Do</h1>
			<form type="submit" onSubmit={addItem}>
				<input
					id="input"
					className="form-control"
					placeholder="Introduzca una tarea..."
					type="text"
					onChange={inputTask}
					value={input}
				/>
			</form>
			<ul>
				{items.map(input => {
					return (
						<li key={input.id}>
							{input.text}
							<button
								type="button"
								className="close"
								onClick={() => deleteItem(input.id)}>
								&times;
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
