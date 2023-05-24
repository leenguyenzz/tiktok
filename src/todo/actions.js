import { ADD_JOB, DELETE_JOB, SET_JOB } from './constains'

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  }
}
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  }
}
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  }
}

export { setJob, addJob, deleteJob }
