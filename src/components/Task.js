import React from "react";
import '../style/Task.css'

function Task({ text }) {
    return (
        <div className="container-task">
            <div className="task-text">
                {text}
            </div>
            <div className="icon-task">
                ToBeSubstitute
            </div>
        </div>
    );
}

export default Task;