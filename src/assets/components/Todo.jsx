function Todo({ todo, toggleComplete, removeTodo }) {
	function handleCheckboxClick() {
		toggleComplete(todo.id)
	}

	function handleRemoveClick() {
		removeTodo(todo.id)
	}

	return (
		<li
			className='page__item card'
			style={{
				backgroundColor: todo.completed ? '#44944A' : null,
			}}
		>
			<div>
				<h2
					className='card__title'
					style={{
						textDecoration: todo.completed ? 'line-through' : null,
					}}
				>
					{todo.title}
				</h2>
				<p className='card__descr'>{todo.text}</p>
				<div className='card__inputs'>
					<input
						type='checkbox'
						checked={todo.completed}
						onChange={handleCheckboxClick}
					/>
					<button onClick={handleRemoveClick}>Удалить</button>
				</div>
			</div>
		</li>
	)
}

export default Todo
