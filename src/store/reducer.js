import {} from './actions'
import { ADD_JOB, DELETE_JOB, SET_JOB } from './constains'
const initState = {
  todoInput: '',
  todos: [],
}

const reducer = (state = '', action = '') => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        todoInput: action.payload,
      }
    case ADD_JOB:
      return {
        todos: state.todos.concat(action.payload),
      }
    case DELETE_JOB:
      return {
        todos: state.todos.filter((todo, id) => id !== action.payload),
      }
    default:
      throw new Error('Invalid action')
  }
}

export { initState }
export default reducer
