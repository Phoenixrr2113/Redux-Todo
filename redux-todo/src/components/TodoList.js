import React from 'react';
import Todo from './Todo';
import { deleteCompleted, toggleCompleted } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const TodoList = props => {
	const deleteCompleted = event => {
		event.preventDefault();
		props.deleteCompleted();
	};

	return (
		<div>
			{props.todoList.map(todo => {
				return (
					<Link key={todo.id} to={`/todo/${todo.id}`}>
						<Todo
							toggleCompleted={() => props.toggleCompleted(todo.id)}
							todo={todo}
						/>
					</Link>
				);
			})}
			<button onClick={deleteCompleted}>clear completed</button>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		todoList: state.todoList,
	};
};

export default connect(
	mapStateToProps,
	{ deleteCompleted, toggleCompleted },
)(TodoList);
