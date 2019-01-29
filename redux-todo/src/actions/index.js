export const ADD_TODO = 'ADD_TODO';
export const DELETE_COMPLETED = 'DELETE_COMPLETED';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

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

export const deleteCompleted = () => {
	return {
		type: DELETE_COMPLETED,
	};
};
export const toggleCompleted = id => {
	return {
		type: TOGGLE_COMPLETED,
		payload: id,
	};
};
