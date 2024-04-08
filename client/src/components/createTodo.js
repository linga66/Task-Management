import React,{useState} from 'react';
import axios from 'axios';
function CreateTodo(){
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:8080/todos',{
                title,
                description,
            });
        }catch(error){
            console.error('Error creating Todo:',error);
        }
    }
    return(
        <div>
            <h2>Create Todo</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    value={description}
                    placeholder='Description'
                    onChange={(e)=> setDescription(e.target.value)}
                />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    );
}
export default CreateTodo