import React from 'react';
import Form from './Form';
import List from './List';

function Todos() {
	return (
		<div className='todoapp'>
			<Form />
			<List />
		</div>
	);
}

export default Todos;
