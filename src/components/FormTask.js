import React, { useState } from "react";
import '../style/FormTask.css'

function FormTask(props) {

    const [ input, setInput ] = useState('');

    const manageChange = e => {
        setInput(e.target.value)
    }

    const manageSend = e => {
        e.preventDefault();

        const newTask = {
            id: 1234,
            text: input,
            completed: false
        }
        console.log(newTask)
    }

    return (
        <form className="FormTask">
            <input
                className="input-task"
                type='text'
                placeholder="Write a task"
                name="text"
                onChange={manageChange}
            />
            <button className="task-button" onClick={manageSend}>
                Add
            </button>
        </form>
    );
}

export default FormTask;