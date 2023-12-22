import React, {useState, useEffect} from 'react';
import "../styles/App.css";
import Todo from "./Todo.js";
import Memo from './Memo';

const App = ()=>{
    const [count, setCount] = useState(0);
    return(
        <div id="main">
        <h1>React.useMemo</h1>
        <Todo/>
        <hr/>
         {/* Counter + explensive Calculation */}
         <p>Count:{count}</p> <button id="incr-cnt" onClick={()=>setCount(count+1)}>+</button>
         <br />
         <h1>Expensive Calculation</h1>
         <hr/>
         <hr/>
         <Memo/>
        </div>
    )
}

export default App;