import React, {useState, useEffect} from 'react';


const Memo= ()=>{
    const[skill, setSkill] =useState("");
    const[skillList, setSkillList] = useState([]);
    const handleSkill=(e)=>{
        setSkill(e.target.value);
    }

    const handleAddSkill = ()=>{
        if(skill.length >= 5){
          setSkillList([...skillList, skill]);
          setSkill("");
        }
        else{
            alert("entered skill has character length of less than 5");
        }
    }

    return(
        <div>
            <h1>React.memo</h1>
            <br/>
            <br/>
         <input
         id="skill-input"
         type ="text"
         onChange={handleSkill}
         value ={skill}
         ></input>
         <button type="button" onClick={handleAddSkill}>Add Skill</button>

         <ul>
            {skillList.map((item, index)=> <li key={index}> {item}</li>)}
         </ul>
        </div>
    )
}

export default Memo;
