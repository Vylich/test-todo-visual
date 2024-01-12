import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function TodoForm({ addTodo }) {
	const [todo, setTodo] = useState({
		id: '',
		title: '',
		text: '',
		completed: false,
	})

	function handleTaskTitleChange(e) {
		setTodo({ ...todo, title: e.target.value })
	}

	function handleTaskTextChange(e) {
		setTodo({ ...todo, text: e.target.value })
	}

	function handleSubmit(e) {
		e.preventDefault()
		if (todo.title.trim()) {
			addTodo({ ...todo, id: uuid() })
			setTodo({ ...todo, title: '', text: '' })
		}
	}

	return (
		<form className='page__form' onSubmit={handleSubmit}>
			<input
				type='text'
				name='title'
				value={todo.title}
        placeholder='Название'
				onChange={handleTaskTitleChange}
			/>
			<textarea
				type='text'
				name='text'
        rows="5" cols="33"
				value={todo.text}
        placeholder='Описание'
				onChange={handleTaskTextChange}
			/>
			<button type='submit'>Добавить задачу</button>
		</form>
	)
}

export default TodoForm
