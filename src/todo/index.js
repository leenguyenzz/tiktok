import { memo, useReducer, useRef } from 'react'
import './Todo.css'
import { addJob, deleteJob, setJob } from './actions'

import reducer, { initState } from './reducer'

function Todo() {
  const [state, dispatch] = useReducer(reducer, initState)
  const { job, jobs } = state
  const inputRef = useRef()
  const handleAddJob = (e) => {
    dispatch(addJob(e.target.value))
    dispatch(setJob(''))
    inputRef.current.focus()
  }

  return (
    <div>
      <input
        ref={inputRef}
        placeholder="enter job..."
        onChange={(e) => dispatch(setJob(e.target.value))}
        value={job}
      />
      <button onClick={handleAddJob}>Add</button>
      {jobs.map((job, index) => (
        <ul key={index} id="flex">
          <li>{job} </li>
          <span onClick={(e) => dispatch(deleteJob(index))}>X</span>
        </ul>
      ))}
    </div>
  )
}

export default memo(Todo)
