import React, {useState,useEffect} from "react";


const Todo = () => {
  let[isClicked, setIsClicked] =useState(false)
  let [task, setTask] = useState([]);
  

   useEffect(()=>{
        handleAddingTask();
   },[isClicked]);

  const handleAddingTask =()=>{
    
    setTask(prevItems=>[...prevItems, "New Todo"]);
    
    
   
  }
  
  return (
    <div>
        <h1>My todos</h1>
       
        <ul style={{listStyleType:"none"}}>
            
          {task.map((item, index)=>(<li key={index} id={"todo-"+index}>{item} </li>))}
        </ul>
        <button  id= "add-todo-btn" onClick={()=>setIsClicked(true)}>Add Todo</button>
    </div>
  )
}

export default Todo;