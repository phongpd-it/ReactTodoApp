import React from 'react';
import TodoListItem from './TodoListItem';
import { useSelector } from 'react-redux';

export default function TodoList(){
  	const todos = useSelector(state => state.todos);

	const renderedListItems = todos.map(todo => {
    	return <TodoListItem key={todo.id} id={todo.id} />
    });
    
	return (
		<ul className="todo-list">{renderedListItems}</ul>
	);
}
