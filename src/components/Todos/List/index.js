import React from 'react';
import './styles.css';
function List({ todos, setTodos }) {
	const removeTodo = (i) => {
		todos = todos.filter((todo, index) => index !== i);
		setTodos([...todos]);
	};
	return (
		<div>
			<ul className='todo-list'>
				{/* <li className='completed'>
					<div className='view'>
						<input className='toggle' type='checkbox' />
						<label>Learn JavaScript</label>
						<button className='destroy'></button>
					</div>
				</li> */}
				{todos.map((todo, i) => (
					<li key={i}>
						<div className='view'>
							<input className='toggle' type='checkbox' />
							<label>{todo.title}</label>
							<button className='destroy' onClick={() => removeTodo(i)} />
						</div>
					</li>
				))}
			</ul>
			<footer className='footer'>
				<span className='todo-count'>
					<strong>2</strong>
					items left
				</span>

				<ul className='filters'>
					<li>
						<a className='selected'>All</a>
					</li>
					<li>
						<a>Active</a>
					</li>
					<li>
						<a>Completed</a>
					</li>
				</ul>

				<button className='clear-completed'>Clear completed</button>
			</footer>
		</div>
	);
}

export default List;
