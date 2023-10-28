import React, { useState } from "react";
import FormTask from "./FormTask";
import '../style/TaskList.css'
import Task from "./Task";

function TaskList() {
// eslint-disable-next-line
    const [tasks, setTasks] = useState([])
// eslint-disable-next-line
    const addTask = task => {
        if(task.text.trim()) {
            task.text = task.text.trim()

            const updatedTasks = [task, ...tasks]
            setTasks(updatedTasks)
        }
    }

    return (
        <>
            <FormTask onSubmit={addTask}/>
            <div className='task-list-container'>
                {
                    tasks.map((task) => 
                        <Task
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            completed={task.completed}    
                        />
                    )
                }
            </div>
        </>
    );
}

export default TaskList;