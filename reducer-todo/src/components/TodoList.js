import React from 'react';
import Todo from './Todo';
import Alert from 'react-bootstrap/Alert'
import './components.css'

function TodoList(props) {
  return (
    <div className='todo-list'>
      <Alert.Heading>Not Completed Todos</Alert.Heading>     
      {props.todos.map( (todo, index) => <Todo key={index} todo={todo} />)}
    </div>
  )
}

export default TodoList
