import { useEffect, useState } from 'react'
import TodoForm from '../src/assets/components/TodoForm'
import TodoList from '../src/assets/components/TodoList'
import './assets/scss/style.scss'

function App() {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		const storageTodos = JSON.parse(localStorage.getItem('todos'))
		if (storageTodos.length) {
			console.log(storageTodos)
			setTodos(storageTodos)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	function addTodo(todo) {
		setTodos([todo, ...todos])
	}

	function toggleComplete(id) {
		setTodos(
			todos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					}
				}
				return todo
			})
		)
	}

	function removeTodo(id) {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	return (
		<div className='App'>
			<div className='page'>
				<div className='page__wrapper'>
					<h1 className='page__title'>Test todo</h1>
					<TodoForm addTodo={addTodo} />
				</div>
				<TodoList
					todos={todos}
					removeTodo={removeTodo}
					toggleComplete={toggleComplete}
				/>
			</div>
		</div>
	)
}

export default App
