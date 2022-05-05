import { useState } from 'react';

function Form({ todos, setTodos }) {
	const [formInput, setFormInput] = useState('');
	const onFormSubmit = (e) => {
		e.preventDefault();
		if (formInput === '') return false;

		setTodos([...todos, { id: todos.length, title: formInput }]);
		console.log(formInput);
	};
	return (
		<div>
			<form onSubmit={onFormSubmit}>
				<input
					className='new-todo'
					value={formInput}
					placeholder='What needs to be done?'
					onChange={(e) => setFormInput(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default Form;
