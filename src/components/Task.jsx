import { FaTrash } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function Task({ task, onDeleteTask, onChangeStatus }) {
    return (
        <tr
            className={task.isCompleted ? "tareaCompletada" : null}
        >
            <td>
                {task.id.slice(0, 5)}
            </td>
            <td>
                {task.description}
            </td>
            <td>
                <FaCheckCircle className="checkIcon" onClick={() => onChangeStatus(task.id)} />

            </td>
            <td>
                <FaTrash className="trashIcon" onClick={() => onDeleteTask(task.id)} />

            </td>
        </tr>
    );
}

export default Task;