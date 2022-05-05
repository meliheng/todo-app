import { useState } from 'react';
import Form from './Form';
import List from './List';

function Todos() {
	const [todos, setTodos] = useState([{ id: 1, title: 'learn react' }]);
	return (
		<div className='todoapp'>
			<Form todos={todos} setTodos={setTodos} />
			<List todos={todos} />
		</div>
	);
}

export default Todos;
