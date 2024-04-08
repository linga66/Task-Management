import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateTodo from './components/createTodo';
import ReadTodos from './components/readTodo';
import UpdateTodo from './components/updateTodo';
import DeleteTodo from './components/deleteTodo';
function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetchTodos();
  }, [])
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/todos');
      setTodos(response.data)
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <CreateTodo fetchTodos={fetchTodos}/>
      <ReadTodos todos={todos} fetchTodos={fetchTodos}/>
      {todos.map((todo) =>(
        <div key={todo._id}>
          <UpdateTodo todo={todo} fetchTodos= {fetchTodos} />
          <DeleteTodo id={todo._id} fetchTodos= {fetchTodos} />
        </div>
      ))}
    </div>
  );
}
export default App;