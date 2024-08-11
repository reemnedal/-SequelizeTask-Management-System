import { useState } from "react";
import axios from 'axios'; 
  

function Add() {
const[Title,setTitle]=useState ();

const [Description,setDescription]=useState();
const handleupdate= async(e)=>{

  try{
  e.preventDefault();
  axios.post('http://localhost:3001/insert', { Title: Title, Description: Description })
 
   } catch (error){

      console.log(error);

  }

}

  return (
<>

<form onSubmit={handleupdate}>
    update task title <input type="text" value={Title} name="title" onChange={(e)=>setTitle( e.target.value)} />
    update task description <input type="text" value={Description} name="Description" onChange={(e)=>setDescription( e.target.value)} />
    <input type="submit" />
</form>

</>
  )
}

export default Add
