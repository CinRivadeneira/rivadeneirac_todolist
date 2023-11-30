
function TaskForm({ onAddTask }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const todoForm = new FormData(e.target);
        const description = todoForm.get('description');
        onAddTask(description);
        e.target.reset();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="description" id="description" placeholder="Tarea pendiente..." aria-label="nueva tarea" required />
            <input type="submit" value="Anotar" id="anotarbtn" />
        </form>
    )
}

export default TaskForm;