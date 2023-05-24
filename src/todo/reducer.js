import { ADD_JOB, DELETE_JOB, SET_JOB } from './constains'
//init
export const initState = {
  job: '',
  jobs: [],
}

//reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      }
    case ADD_JOB:
      return {
        jobs: state.jobs.concat(state.job),
      }
    case DELETE_JOB:
      const j = state.jobs.filter((job, index) => index !== action.payload)
      return {
        jobs: j,
        job: '',
      }
    default:
      throw new Error(`Invalid action ${action.type}`)
  }
}
export default reducer
