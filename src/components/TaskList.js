import React from "react";
import FormTask from "./FormTask";

function TaskList() {
    return (
        <>
            <FormTask />
            <div className='task-list-container'>
                Task list
            </div>
        </>
    );
}

export default TaskList;