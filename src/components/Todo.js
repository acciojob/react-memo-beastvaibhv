import React, {useState} from "react";


const Todo = () => {
  let [task, setTask] = useState([]);
  let [text, setText] = useState("");
  const handleTask=(e)=>{
    const t = e.target.value;
    setText(t);
  }
  const handleAddingTask =()=>{
    if(text.trim()!== ""){
    setTask(prevItems=>[...prevItems, text]);
    }
    setText("");
   
  }
  
  return (
    <div>
        <h1>To-Do List</h1>
        <input type="text" onChange={handleTask} value={text}  /> <button onClick={handleAddingTask}>Add Todo</button>
        <ul style={{listStyleType:"numeric"}}>
          {task.map((item, index)=>(<li key={index}>  <p className="task">{item}</p> </li>))}
        </ul>
    </div>
  )
}

export default Todo;