import React from 'react';
import './styles.css';
function List() {
	return (
		<div>
			<ul className='todo-list'>
				<li className='completed'>
					<div className='view'>
						<input className='toggle' type='checkbox' />
						<label>Learn JavaScript</label>
						<button className='destroy'></button>
					</div>
				</li>
				<li>
					<div className='view'>
						<input className='toggle' type='checkbox' />
						<label>Learn React</label>
						<button className='destroy'></button>
					</div>
				</li>
				<li>
					<div className='view'>
						<input className='toggle' type='checkbox' />
						<label>Have a life!</label>
						<button className='destroy'></button>
					</div>
				</li>
			</ul>
			<footer class='footer'>
				<span class='todo-count'>
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
