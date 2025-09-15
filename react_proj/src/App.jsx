 import React from 'react';
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [todos,setTodos]=useState([{
    tittle:"running",
    description:"5:30 to 6:00 am ",
    completed:false
  },{
    tittle:"gym",
    description:"6:30 to 8:00 am ",
    completed:false
  }]);
  function addTodo(props){
    setTodos([...todos,{
      tittle:"new tittle",
      description:"ddes"
    }])
  }
  return (
      <div>
       <button onClick ={addTodo} >Add  todo</button>
      <ul>
      {todos.map(function (todo){
        return <li>
          <Todo tittle={todo.tittle} description={todo.description} completed={todo.completed}/>
        </li>
      })}

      </ul>
      </div>
  )
}
function Todo(Props){
  return <div>
    <h3>{Props.tittle}</h3>
    <p>{Props.description}</p>
    <div>
        <input type="checkbox"  name="completed"  />
        <label For="completed">completed</label>
        </div>
   </div>
}
function CoustomButton(props){

  function onClickHandler(){
    props.setCount(props.count+1);
  }

  return <button onClick={onClickHandler}>
          counter {props.count}
        </button>
}
export default App
