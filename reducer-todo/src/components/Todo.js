import React, {useReducer} from 'react'
import Alert from 'react-bootstrap/Alert';
import './components.css';

function Todo(props) {   
  
  return (
    <div style={{display:'flex', flexDirection:"row", justifyContent:"flex-start"}}> 
      <input type="checkbox" 
             checked={props.todo.completed}
             onChange={() => {props.toggle(props.todo.id)}}/>
      <Alert variant='warning' 
             className='alert'
       >{props.todo.item}</Alert>  
    </div>
  )
}

export default Todo
