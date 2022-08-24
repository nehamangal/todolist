import React from "react";

const Todo=(props)=>{

return(
    <>
    <div>
    <button onClick={()=>{
        props.onSelect(props.id)
    }}>-</button>{props.text}
    <button onClick={()=>{
        props.onEdit(props.idnew)
    }}>edit</button>
    </div>
    
    </>
    
)

}

export default Todo