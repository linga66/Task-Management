import React,{useState,useEffect} from "react"
import axios from "axios"
function ReadTodos(){
    const [todos,setTodos]=useState([])
    useEffect(()=>{
        const fetchTodos=async()=>{
            try{
                const response=await axios.get('http://localhost:8080/todos')
                setTodos(response.data)
            }catch(error){
                console.error('Error fetching todos:',error)
            }
        }
        fetchTodos();
    },[]);
    return ( 
        <div>
            <h2>Todos</h2>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo._id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                        <button>Update</button>
                        <button>Delete</button>                    
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ReadTodos;