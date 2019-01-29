import { ADD_TODO, DELETE_COMPLETED, TOGGLE_COMPLETED } from '../actions';

const initialState = {
	todoList: [
		{
			id: 1,
			task: 'connect redux',
			completed: false,
		},
	],
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todoList: [...state.todoList, action.payload],
			};
		case TOGGLE_COMPLETED:
			return {
				...state,
				todoList: state.todoList.map(todo =>
					todo.id === action.payload
						? { ...todo, completed: !todo.completed }
						: todo,
				),
			};
		// case DELETE_COMPLETED:
		// 	return {
		// 		...state,
		// 		todoList: state.todoList.filter(todo => {
		// 			return todo.id !== action.payload;
		// 		}),
		// 	};

		case DELETE_COMPLETED:
			return {
				...state,
				todoList: state.todoList.filter(todo => todo.completed !== true),
			};

		default:
			return state;
	}
};

export default todoReducer;
