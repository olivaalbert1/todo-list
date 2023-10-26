import React, { useState } from "react";
import FormTask from "./FormTask";
import '../style/TaskList.css'
import Task from "./Task";

function TaskList() {

    const [tasks, setTasks] = useState([])

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