import React, { Component } from 'react';
import SplitText from 'react-pose-text';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './styles/css/index.css';

class App extends Component {
	render() {
		const charPoses = {
			exit: { opacity: 0, y: 20 },
			enter: {
				opacity: 1,
				y: 0,
				delay: ({ charIndex }) => charIndex * 200,
			},
		};
		return (
			<div className="app">
				<header className="title">
					<h1>
						<SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
							TO-DO LIST
						</SplitText>
					</h1>
				</header>
				<TodoForm />
				<TodoList />
			</div>
		);
	}
}

export default App;
