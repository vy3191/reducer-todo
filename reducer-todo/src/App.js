import React, {useState, useReducer} from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoList from './components/TodoList';
import Completed from './components/Completed';
import Alert from 'react-bootstrap/Alert';
import {Button} from 'react-bootstrap';
import './App.css';

function App() {
  const [state, despatch] = useReducer(reducer, initialState);
  console.log(state)
  return (
    <div className="App">     
      <Alert.Heading>Reducer Todos</Alert.Heading>
      <form>
        <input type="text" />
        <Button type="suBmit">Add</Button>
      </form>
      <div className="main-container">
        <TodoList todos={state} />
        <Completed />
      </div>  
    </div>
  );
}

export default App;
