import { ADD_TODO } from '../actions';

const initialState = {
	todoList: [
		{
			id: 1,
			task: 'connect redux',
			completed: false,
		},
	],
	todo: null,
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todoList: [...state.todoList, action.payload],
			};

		default:
			return state;
	}
};

export default todoReducer;
