import { useState } from 'react';
import Form from './Form';
import List from './List';

function Todos() {
	const [todos, setTodos] = useState([
		{ id: 1, title: 'learn react', active: true },
	]);
	return (
		<div className='todoapp'>
			<Form todos={todos} setTodos={setTodos} />
			<List todos={todos} setTodos={setTodos} />
		</div>
	);
}

export default Todos;
