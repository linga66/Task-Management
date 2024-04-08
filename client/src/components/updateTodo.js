import React, { useState } from 'react';
import axios from 'axios';
function UpdateTodo({ todo }) {
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const [completed, setCompleted] = useState(todo.completed);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/todos/${todo._id}`, {
                title,
                description,
                completed,
            });
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };
    return (
        <div>
            <h2>Update Todo</h2>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label>
                    Completed:
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                    />
                </label>
                <button type="submit">Update Todo</button>
            </form>
        </div>
    );
}
export default UpdateTodo;