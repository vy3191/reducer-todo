
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
         id: Date.now()
         },
         {item: 'Learn about CSS3',
         completed: false,
         id: Date.now()
         },
         {item: 'Learn about JavaScript',
         completed: false,
         id: Date.now()
         },
         {item: 'Learn about JQuery',
         completed: false,
         id: Date.now()
         },
         {item: 'Learn about React',
         completed: false,
         id: Date.now()
         },
         {item: 'Learn about Redux',
         completed: false,
         id: Date.now()
         }]
}
  

  export function reducer(state, action) {
      switch(action.type) {
        case "TOGGLE_COMPLETED":
          const toggledTodos = state.todos.map( (item) => {
             if(item.id == action.payload) {
                 return {
                    ...item,
                    completed: !item.completed
                 }
             } else {
                return {
                   item
                }
             }
          });
          
          return {
            todos: [...toggledTodos]            
          }

        case "ADD_TODO":
          return {
             todos: [...state.todos, {item: action.payload, completed: false, id: Date.now()}]            
          }  
        default:
          return state
      }
  }
