import React, {useState, useReducer} from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoList from './components/TodoList';
import Completed from './components/Completed';
import './App.css';

function App() {
  const [state, despatch] = useReducer(reducer, initialState);
  console.log(state)
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Reducer Todo App</h1>
      <div className="main-container">
        <TodoList todos={state} />
        <Completed />
      </div>  
    </div>
  );
}

export default App;
