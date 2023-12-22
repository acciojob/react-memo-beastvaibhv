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
         <p id="incr-cnt">Count: 0 <button  id="incr-btn" onClick={()=>setCount(count + 1000000000)}>+</button></p> 
         <br />
         <div  id="calc">
         <h3>Expensive Calculation</h3>
         <h3>1000000000</h3>
         </div>
         
         <hr/>
         <hr/>
         <Memo/>
        </div>
    )
}

export default App;