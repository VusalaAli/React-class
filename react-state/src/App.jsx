import { useState } from "react";
import "./App.css";

function App() {
const [todo, settodo] = useState([{id: 1, name: "hello"}]);
 const [todoinp, settodoinp] = useState("")
 function handleSubmit(e){
  e.preventDefault()
  if(todoinp === ""){
    return
  }
  settodo([...todo,{id: Math.random(), name: todoinp}])
  settodoinp("")
 }
 function handleDelete(todoitem){
  settodo(todo.filter((x) => x.id !== todoitem.id))
 }
  return (
    <>
   <form onSubmit={handleSubmit}>
    <input type="text" value={todoinp} onChange={(e) => settodoinp( e.target.value)}/>
    <button>Add</button>
   </form>
  <ul>
    {todo.map((todoitem,i) => (
        <li key={i}>
          <span>{todoitem.name}</span>
          <button onClick={() => handleDelete(todoitem)}>x</button>
        </li>
      ))}
  </ul>
    </>
  );
}

export default App;
