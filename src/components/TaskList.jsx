import Task from "./Task";


function TaskList({ tasks, onDeleteTask, onChangeStatus }) {

    return (
        <table>
            <thead>
                <th>ID</th>
                <th>TAREA</th>
                <th>COMPLETAR</th>
                <th>ELIMINAR</th>
            </thead>
            <tbody>
                {tasks.map(t => <Task key={t.id} task={t} onDeleteTask ={onDeleteTask} onChangeStatus= {onChangeStatus} />)}
               
            </tbody>
        </table>

    );
}

export default TaskList;