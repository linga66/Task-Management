import React from 'react';
import axios from 'axios';
function DeleteTodo({id}){
    const handleDelete=async()=>{
        try{
            await axios.delete(`http://localhost:8080/todos/${id}`)
        }catch(error){
            console.error('Error deleting todo',error)
        }
    }
    return(
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default DeleteTodo;