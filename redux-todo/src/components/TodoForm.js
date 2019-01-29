import React, { Component } from 'react';
import posed from 'react-pose';

import { connect } from 'react-redux';
import { deleteCompleted, addTodo } from '../actions';

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

	deleteCompleted = event => {
		event.preventDefault();
		this.props.deleteCompleted();
	};

	render() {
		const Box = posed.div({
			hoverable: true,
			pressable: true,
			init: {
				scale: 1,
			},
			hover: {
				scale: 1.2,
			},
			press: {
				scale: 1.1,
			},
		});
		const Button = posed.div({
			hoverable: true,
			pressable: true,
			init: {
				scale: 1,
			},
			hover: {
				scale: 1,
			},
			press: {
				scale: 1.1,
			},
		});
		return (
			<form className="todo-form" onSubmit={e => e.preventDefault()}>
				<input
					className="todo-input"
					type="text"
					name="newTodo"
					value={this.state.newTodo}
					onChange={this.handleInputChange}
					placeholder="Enter Task"
					required
					minLength="6"
				/>
				<div className="buttons">
					<Box>
						<button className="add-btn" onClick={this.addNewTodo}>
							<Button> Add </Button>
						</button>
					</Box>
					<Box>
						<button className="clear-complete" onClick={this.deleteCompleted}>
							clear
						</button>
					</Box>
				</div>
			</form>
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
	{ addTodo, deleteCompleted },
)(TodoForm);
