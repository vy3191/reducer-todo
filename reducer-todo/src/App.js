import React, {useState, useReducer} from 'react';
import { initialState, reducer } from './reducers/reducer';
import './App.css';

function App() {
  const [state, despatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Reducer Todo App</h1>
    </div>
  );
}

export default App;
