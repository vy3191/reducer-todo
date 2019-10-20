import React from 'react'
import Alert from 'react-bootstrap/Alert'

function Todo(props) {
  return (
    <div> 
      <Alert variant='warning' style={{textAlign:"left", paddingLeft:"60px"}}>{props.todo.item}</Alert>  
    </div>
  )
}

export default Todo
