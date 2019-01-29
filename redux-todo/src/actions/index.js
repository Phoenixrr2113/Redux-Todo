export const ADD_TODO = 'ADD_TODO';

export const addTodo = todo => {
	const newTodo = {
		id: Math.random() * 100,
		task: todo,
		completed: false,
	};
	return {
		type: ADD_TODO,
		payload: newTodo,
	};
};
