
// export const initialState = [
//       {item: 'Learn about HTML5',
//       completed: false,
//       id: Date.now()
//       },
//       {item: 'Learn about CSS3',
//       completed: false,
//       id: Date.now()
//       },
//       {item: 'Learn about JavaScript',
//       completed: false,
//       id: Date.now()
//       },
//       {item: 'Learn about JQuery',
//       completed: false,
//       id: Date.now()
//       },
//       {item: 'Learn about React',
//       completed: false,
//       id: Date.now()
//       },
//       {item: 'Learn about Redux',
//       completed: false,
//       id: Date.now()
//       }
//   ];
export const initialState = {
   todos:[ 
         {item: 'Learn about HTML5',
         completed: false,
         id: Date.now() + 1
         },
         {item: 'Learn about CSS3',
         completed: false,
         id: Date.now() + 2
         },
         {item: 'Learn about JavaScript',
         completed: false,
         id: Date.now() +3
         },
         {item: 'Learn about JQuery',
         completed: false,
         id: Date.now() +4
         },
         {item: 'Learn about React',
         completed: false,
         id: Date.now() +5
         },
         {item: 'Learn about Redux',
         completed: false,
         id: Date.now() +6
         }],
    doneTodos: []     
}
  

  export function reducer(state, action) {
      switch(action.type) {
        case "TOGGLE_COMPLETED":
           return {
              ...state,
              todos: state.todos.map(item => item.id == action.payload
                                ? {...item, completed: !item.completed}
                                : item
              )}
  
        case "ADD_TODO":
          return {
             ...state,
             todos: [...state.todos, {item: action.payload, completed: false, id: Date.now()}]            
          }  

        case "DELETE_TODO":
          const deletedTodos = state.todos.filter( (item) => !item.completed);
          const completedTodos = state.todos.filter( item => item.completed)
          return  {
            todos: deletedTodos,
            doneTodos: completedTodos
          } 

        default:
          return state
      }
  }
