import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const TodoList = props => {
	return (
		<div>
			{props.todoList.map(todo => {
				return <Todo key={todo.id} todo={todo} />;
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
	{},
)(TodoList);
