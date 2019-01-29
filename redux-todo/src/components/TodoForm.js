import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends Component {
	state = {
		newTodo: '',
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	addNewTodo = event => {
		event.preventDefault();
		this.props.addTodo(this.state.newTodo);
		this.setState({
			newTodo: '',
		});
	};

	render() {
		return (
			<div>
				<input
					type="text"
					name="newTodo"
					value={this.state.newTodo}
					onChange={this.handleInputChange}
				/>
				<button onClick={this.addNewTodo}>Add Task</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todoList: state.todoList,
	};
};

export default connect(
	mapStateToProps,
	{ addTodo },
)(TodoForm);
