import React from 'react'

function Todo(props) {
  return (
    <div>      
      <p>{props.todo.item}</p>
    </div>
  )
}

export default Todo
