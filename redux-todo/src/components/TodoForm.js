import React, { Component } from 'react';
import posed from 'react-pose';

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
		const Box = posed.div({
			hoverable: true,
			pressable: true,
			init: {
				scale: 1,
			},
			hover: {
				scale: 1.3,
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
				scale: 1.3,
			},
			press: {
				scale: 1.1,
			},
		});
		return (
			<form className="todo-form">
				<input
					className="todo-input"
					type="text"
					name="newTodo"
					value={this.state.newTodo}
					onChange={this.handleInputChange}
					placeholder="Enter Task"
				/>
				<div className="buttons">
					<Box>
						<button className="add-btn" onClick={this.addNewTodo}>
							<Button>Add</Button>
						</button>
					</Box>
					{/* <Box>
						<button
							className="clear-complete"
							onClick={this.props.clearCompleted}>
							<Button>Clear Completed</Button>
						</button>
					</Box> */}
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
	{ addTodo },
)(TodoForm);
