import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TodoList from './components/TodoList';
import './App.css';
import TodoForm from './components/TodoForm';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Route path="/" component={TodoList} />
				<Route path="/newtodo" component={TodoForm} />
			</div>
		);
	}
}

export default App;
