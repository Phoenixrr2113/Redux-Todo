import React from 'react';
import Todo from './Todo';
import { toggleCompleted } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const TodoList = props => {
	return (
		<div className="todo-list">
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
	{ toggleCompleted },
)(TodoList);
