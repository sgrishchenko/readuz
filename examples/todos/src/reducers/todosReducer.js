import { ADD_TODO, DELETE_TODO } from '../actions/todosActions';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const max = Math.max(...Object.keys(state));
      const id = max === -Infinity ? 0 : max + 1;

      return {
        ...state,
        [id]: {
          id,
          completed: false,
          text: action.text,
        },
      };
    }
    case DELETE_TODO:
      return Object.entries(state)
        .filter(([id]) => id !== action.id)
        .reduce((result, [id, todo]) => ({
          ...result,
          [id]: todo,
        }), {});
    default:
      return state;
  }
};
