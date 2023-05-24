import { ADD_JOB, DELETE_JOB, SET_JOB } from './constains'

const setJob = (payload) => {
  return {
    payload,
    type: SET_JOB,
  }
}
const addJob = (payload) => {
  return {
    payload,
    type: ADD_JOB,
  }
}
const deleteJob = (payload) => {
  return {
    payload,
    type: DELETE_JOB,
  }
}

export { setJob, addJob, deleteJob }
