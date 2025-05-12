// Leah Feldman
// 5/4/2025

import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './ToDoList.css'

function TodoApp() {
    const [task, setTask] = useState(""); // current task
    const [tasks, setTasks] = useState([]); //list of all tasks

    function submitForm(e) {
        e.preventDefault();

        if (!task || task === "") {
            alert("Please enter a task");
            return;
        } 
        setTasks([...tasks, task]); // add current task to list of tasks
        e.target.reset(); // Reset the form to clear the input field after submitted
        setTask(""); // set task to empty once it was added to list
    }
        return (
        <>
        <div className="container">
        <header className="header">
            <h1>Task Tracker</h1>
        </header>
            {/* List of To Do items */}
            {
                tasks.length === 0 &&
                    <p>There are no items in your to do list.</p>
            }
            <div className="task-list">
            {tasks.map((taskItem, index) => ( // for each task in the tasks list
                <TodoItem // create a <TodoItem/>
                key={index} // assign each one a key                           
                taskText={taskItem} 
                remove={() => {
                    const updatedTasks = tasks.slice();
                    const index = updatedTasks.indexOf(taskItem);
                    if (index > -1) {
                        updatedTasks.splice(index, 1); // remove first instance of task to be removed
                    }
                    setTasks(updatedTasks);
                }} 
                />
            ))}
            </div>
       
            {/* Field to enter a new To Do item */}
            <form className="form" onSubmit={submitForm}>
            <input 
            className="input-field"
            name="taskInput"
            type="text" 
            onChange={(e) => setTask(e.target.value)} 
            />
            <button className="add-button" type="submit" onSubmit={submitForm}>Add Task</button>
            </form>
            </div>
        </>
        );
}
export default TodoApp;