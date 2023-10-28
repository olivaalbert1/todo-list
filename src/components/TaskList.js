import React, { useState } from "react";
import FormTask from "./FormTask";
import '../style/TaskList.css'
import Task from "./Task";

function TaskList() {
// eslint-disable-next-line
    const [tasks, setTasks] = useState([])
// eslint-disable-next-line
    const addTask = task => {
        console.log('Added task')
        console.log(task)
    }

    return (
        <>
            <FormTask />
            <div className='task-list-container'>
                {
                    tasks.map((task) => 
                        <Task
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