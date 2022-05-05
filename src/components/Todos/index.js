import { useState } from 'react';
import Form from './Form';
import List from './List';

function Todos() {
	const [todos, setTodos] = useState([{ title: 'learn react' }]);
	return (
		<div className='todoapp'>
			<Form />
			<List todos={todos} />
		</div>
	);
}

export default Todos;
