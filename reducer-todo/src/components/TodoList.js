import React from 'react';
import Todo from './Todo';
import Alert from 'react-bootstrap/Alert'
import './components.css'

function TodoList(props) {
  console.log(props.todos)
  return (
    <div className='todo-list'>
      <Alert.Heading>Not Completed Todos</Alert.Heading>     
      {props.todos.map( (todo, index) => <Todo key={index} todo={todo} toggle={props.toggle}/>)}
    </div>
  )
}

export default TodoList
