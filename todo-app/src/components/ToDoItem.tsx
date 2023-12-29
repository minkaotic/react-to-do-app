/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    id: number,
    text: string,
    completed: boolean,
    important: boolean,
    handleDelete: any
}

export function ToDoItem({
    id,
    text,
    completed,
    important,
    handleDelete }: Props) {
    const [textState, setTextState] = useState(text);
    const [completedState, setCompletedState] = useState(completed);



    // useEffect(() => {
    //     setTextState(`${text} ${new Date().toLocaleDateString()}`);
    // }, []);

    return (
        <div
            className={completedState ? "completed" : ""}
            onClick={() => setCompletedState(!completedState)}>
            {important ? "*" : ""} {textState}
            <span className="task-actions">
                {/* <button
                    className="btn edit"
                    title="Edit"
                    onClick={() => handleEdit(todoItem)}
                >
                    <i className="fas fa-pencil-alt"></i>
                </button> */}

                <button
                    title="Delete"
                    onClick={() => {
                        const response = window.confirm("Delete?");
                        if (response) {
                            handleDelete(id);
                        }
                    }}
                >
                    <FontAwesomeIcon icon={faTrashAlt} />
                    <i className="far fa-trash-alt"></i>
                </button>
            </span>
        </div>
    );
}