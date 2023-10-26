import React from "react";
import '../style/FormTask.css'

function FormTask(props) {
    return (
        <form className="FormTask">
            <input
                className="input-task"
                type='text'
                placeholder="Write a task"
                name="text"
            />
            <button className="task-button">
                Add
            </button>
        </form>
    );
}

export default FormTask;