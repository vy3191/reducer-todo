import React, {useReducer} from 'react'
import Alert from 'react-bootstrap/Alert';
import {initialState, reducer} from '../reducers/reducer';
import './components.css';

function Todo(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const id = props.todo.item.id;
  return (
    <div style={{display:'flex', flexDirection:"row", justifyContent:"flex-start"}}> 
      <input type="checkbox"  onCheck={() => {dispatch({type:"TOGGLE_TODO", payload:id})}}/>
      <Alert variant='warning' 
             className='alert'
       >{props.todo.item}</Alert>  
    </div>
  )
}

export default Todo
