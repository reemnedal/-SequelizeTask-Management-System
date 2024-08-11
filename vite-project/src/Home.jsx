import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
 
 
function Task() {
  const [Tasks, setTask] = useState([]);
  const [TaskDelete, setTaskDelete] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);


  
 

  return (

<>
 
{Tasks.map((t) => (

<div class="max-w-sm rounded overflow-hidden shadow-lg" key={t.id}>
  {/* <img class="w-full" src= {t.title} alt="Sunset in the mountains"/> */}
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2" key={t.id}>Title :{t.title}</div>
    <p class="text-gray-700 text-base">
    Description:{t.description}
    
     </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ID:{t.id}</span>
   <Link  to={`/update/${t.id}`}>Update</Link>
 
   {/* <button  onClick={() => Delete(t.taskid)} className="bg-red-500">Delete</button> */}
    
    
    
    </div>
</div>  


))}
 </> );
}

export default Task;
