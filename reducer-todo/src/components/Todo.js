import React, {useReducer} from 'react'
import Alert from 'react-bootstrap/Alert';
import './components.css';

function Todo(props) {   
  
  return (
    <div style={{display:'flex', flexDirection:"row", justifyContent:"flex-start"}}>       
      <Alert variant='warning' 
             className='alert'
       ><span><input type="checkbox" 
             checked={props.todo.completed}
             style={{ width:20, height: 10 }}
             onChange={() => {props.toggle(props.todo.id)}}/></span>{props.todo.item}</Alert>  
    </div>
  )
}

export default Todo
