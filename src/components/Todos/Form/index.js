import { useState } from 'react';

function Form() {
	const [formInput, setFormInput] = useState('');
	return (
		<div>
			<form>
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
