import React, {useState, useReducer, useEffect} from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoList from './components/TodoList';
import Completed from './components/Completed';
import Alert from 'react-bootstrap/Alert';
import './App.css';

function App() {
  const [newTitle, setNewTitle] = useState("");
  const [completedTodos, setCompletedTodos] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect( () => {
     setCompletedTodos([...completedTodos, ...state.doneTodos])
  },[state.doneTodos])
  
  const handleInput = (event) => {
      event.preventDefault();
      setNewTitle(event.target.value);
  }
  const handleToggle = (id) => {
     dispatch({type:"TOGGLE_COMPLETED", payload: id});
     console.log('working now', id)
  }
 const handleSubmit = (event) => {
     event.preventDefault();
     if(newTitle) {
      dispatch({type:"ADD_TODO", payload: newTitle || state.title});
     }
     setNewTitle("")
 }

 const deleteTodos = () => {
     dispatch({type:"DELETE_TODO"});
 }
  return (
    <div className="App">  
         
      <Alert.Heading>Reducer Todos</Alert.Heading>
      <form onSubmit={handleSubmit}>
        <input type="text"
               value={newTitle}
               onChange={handleInput} />
        <button type="suBmit">Add</button>
        <button variant="success" onClick={deleteTodos}>Clear Completed Todos</button>
      </form>
      <div className="main-container">
        <TodoList todos={state.todos} toggle={handleToggle}  />
        <Completed done={completedTodos}/>
      </div>  
      
    </div>
  );
}

export default App;
