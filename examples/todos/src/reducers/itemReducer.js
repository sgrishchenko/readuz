import { ADD_TODO, UPDATE_TODO, DELETE_TODO, DELETE_COMPLETED_TODOS, TOGGLE_ALL_TODOS } from '../constants/actionTypes';

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

    case UPDATE_TODO: {
      const { id } = action.todo;

      return {
        ...state,
        [id]: {
          ...state[id],
          ...action.todo,
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

    case DELETE_COMPLETED_TODOS:
      return Object.entries(state)
        .filter(([, todo]) => !todo.completed)
        .reduce((result, [id, todo]) => ({
          ...result,
          [id]: todo,
        }), {});

    case TOGGLE_ALL_TODOS:
      return Object.entries(state)
        .reduce((result, [id, todo]) => ({
          ...result,
          [id]: {
            ...todo,
            completed: action.complete
          },
        }), {});

    default:
      return state;
  }
};
