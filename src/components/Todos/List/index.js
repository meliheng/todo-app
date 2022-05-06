import { useEffect, useState } from 'react';
import './styles.css';
function List({ todos, setTodos }) {
	const [activeTodoCount, setActiveTodoCount] = useState(todos.length);
	const [filteredList, setFilteredList] = useState(todos);
	const removeTodo = (i) => {
		todos = todos.filter((todo, index) => index !== i);
		setTodos([...todos]);
	};
	const updateTodo = (i) => {
		todos = [...todos]; // important to create a copy, otherwise you'll modify state outside of setState call
		todos[i] = { ...todos[i], active: !todos[i].active };
		setTodos([...todos]);
	};
	const computeActiveTodoCount = () => {
		const list = todos.filter((todo) => todo.active);
		setActiveTodoCount(list.length);
	};
	useEffect(() => {
		computeActiveTodoCount();
		setFilteredList(todos);
	}, [todos]);
	const activeFiltered = () => {
		setFilteredList(todos.filter((todo) => todo.active));
	};
	const completedFiltered = () => {
		setFilteredList(todos.filter((todo) => !todo.active));
	};
	const noFiltered = () => {
		setFilteredList(todos);
	};
	const removeAllCompleted = () => {
		todos = todos.filter((todo) => todo.active);
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
				{filteredList.map((todo, i) => (
					<li
						key={i}
						className={todo.active === false ? 'completed' : undefined}
					>
						<div className='view'>
							<input
								className='toggle'
								type='checkbox'
								onClick={() => updateTodo(i)}
								readOnly
								checked={!todo.active ? true : false}
							/>
							<label>{todo.title}</label>
							<button className='destroy' onClick={() => removeTodo(i)} />
						</div>
					</li>
				))}
			</ul>
			<footer className='footer'>
				<span className='todo-count'>
					<strong>{activeTodoCount}</strong>
					items left
				</span>

				<ul className='filters'>
					<li>
						<a onClick={noFiltered} className='selected'>
							All
						</a>
					</li>
					<li>
						<a onClick={activeFiltered}>Active</a>
					</li>
					<li>
						<a onClick={completedFiltered}>Completed</a>
					</li>
				</ul>

				<button onClick={removeAllCompleted} className='clear-completed'>
					Clear completed
				</button>
			</footer>
		</div>
	);
}

export default List;
