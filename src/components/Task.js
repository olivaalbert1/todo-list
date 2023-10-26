import React from "react";
import '../style/Task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ text, completed }) {
    return (
        <div className={ completed ? 'container-task completed' : 'container-task'}>
            <div className="task-text">
                {text}
            </div>
            <div className="icon-task-container">
                <AiOutlineCloseCircle className="icon-task" />
            </div>
        </div>
    );
}

export default Task;