import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Todo from './Todo'
// Get data from local storage
const getLocalItems=()=>{
    let list = localStorage.getItem('lists');
    console.log(list);

    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    }
    else{
        return [];
    }
}

const App=()=>{
 const[currdata,updata] = useState('');
 const[inidata,setitem] = useState(getLocalItems());
 const[toggleini,settoggle] = useState(true);
 const[edititem,setedit] = useState(null);

 
//  Add Item
const additem=()=>{
    if(!currdata){
  
    }
    else if(currdata && !toggleini){
              setitem(
                inidata.map((elem)=>{
               
                  if(elem.id === edititem){
                  
                      return {...elem,name:currdata}
                  }
  
                  return elem;
              })
              )

              settoggle(true)
              updata(' ')
              setedit(null);
    }
    else{    
        const indata = {id:new Date().getTime().toString(),name:currdata}
       setitem ([...inidata,indata]);
          
          updata('');
    }
   }

 let a = ""
 const inputevent=(e)=>{
   a = e.target.value;
   console.log(a);
   updata(a);
   
 }


//  Edit Item
const editItem = (id) =>{
    
   
    const Array = inidata.find((elem)=>{
        return elem.id ===id
    })

  settoggle(false)
  updata(Array.name)
  setedit(id);
}
 

//  Delete Item
 const deleteitem = (id)=>{
     setitem((olddata)=>{
     return olddata.filter((arrele,index)=>{
            return index!==id;
     })
     })
   
 }


 
// Set in Local Storage
 useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(inidata));
 },[inidata]);


    return(
        <>
        
        <h1>TODO LIST</h1>
        <input type="text" onChange={inputevent} value={currdata} placeholder="Add Items"/>

        {
            toggleini ?   <button onClick={additem}>+</button> : <button onClick={additem}>Edit</button>
        }
     

        {
             inidata.map((itemval)=>{
                
                return(
                   <>
                 
                     <Todo text={itemval.name} id={itemval.id} idnew = {itemval.id} onSelect = {deleteitem} onEdit = {editItem}/>
                   </>
                  
                   
                )
               
                
             })
    
   
        }
      
        
        </>
    )


}

export default App;
