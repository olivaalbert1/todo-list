import React from "react";
import '../style/Task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ text }) {
    return (
        <div className="container-task">
            <div className="task-text">
                {text}
            </div>
            <div className="icon-task">
                <AiOutlineCloseCircle />
            </div>
        </div>
    );
}

export default Task;