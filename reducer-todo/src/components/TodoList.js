import React from 'react';
import Todo from './Todo';

function TodoList(props) {
  return (
    <div>
      <h1>Not Completed Todos</h1>
      {props.todos.map( (todo, index) => <Todo key={index} todo={todo} />)}
    </div>
  )
}

export default TodoList
