import { useRef } from 'react'
import { actions, useStore } from './store'

function App() {
  const [state, dispatch] = useStore()
  const { todoInput, todos } = state
  const addRef = useRef()
  function handleAddJob() {
    if (todoInput !== '') {
      dispatch(actions.addJob(todoInput))
      dispatch(actions.setJob(''))
    }
    addRef.current.focus()
  }
  function handleDelete(index) {
    dispatch(actions.deleteJob(index))
  }
  return (
    <div>
      <input
        ref={addRef}
        placeholder="enter job..."
        value={todoInput}
        onChange={(e) => dispatch(actions.setJob(e.target.value))}
      />
      <button onClick={handleAddJob}>Add</button>
      {todos.map((todo, index) => (
        <li key={index}>
          Job{index + 1}: {todo}
          <button onClick={() => handleDelete(index)}>x</button>
        </li>
      ))}
    </div>
  )
}

export default App
