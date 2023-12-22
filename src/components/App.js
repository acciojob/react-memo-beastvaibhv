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
         <p id="incr-cnt">Count:{count} <button id="incr-cnt" onClick={()=>setCount(count + 1)}>+</button></p> 
         <br />
         <h3 id="calc">Expensive Calculation</h3>
         <hr/>
         <hr/>
         <Memo/>
        </div>
    )
}

export default App;