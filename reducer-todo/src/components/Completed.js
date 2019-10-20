import React from 'react'
import Alert from 'react-bootstrap/Alert';
import './components.css';

function Completed(props) {
  if(props.done.length === 0) {
   return  <Alert variant='warning' className='alert'>There are no completed Todos Now</Alert>  
   
  }
  console.log(props)
  return (
    <div className="completed">     
      <Alert.Heading>Completed Todos</Alert.Heading>
      {
        props.done.map( todo => {
         return  <Alert variant='warning' 
                 className='alert'
          >{todo.item}</Alert>  
        })
      }
    </div>
  )
}

export default Completed
