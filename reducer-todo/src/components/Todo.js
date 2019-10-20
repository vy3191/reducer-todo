import React from 'react'
import Alert from 'react-bootstrap/Alert';
import './components.css';

function Todo(props) {
  return (
    <div> 
      <Alert variant='warning' 
             className='alert'
       >{props.todo.item}</Alert>  
    </div>
  )
}

export default Todo
