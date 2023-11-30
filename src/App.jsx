import { useState, useEffect } from 'react';
import './App.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Search from './components/SearchBar';

function getTaskFromStorage(){
  const storedTasks = window.localStorage.getItem("tasks");
  const tasks = JSON.parse(storedTasks);
  return tasks ? tasks : [];
}

function App() {
  const [tasks, setTasks] = useState(getTaskFromStorage); 
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [searchQuery, setSearchQuery] = useState("");

  
  const handleAddTask = (description) => {
    const newTask = {
      id: self.crypto.randomUUID(),
      description: description,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
    setFilteredTasks([...filteredTasks, newTask]);
};

  const handleDelete = (id) => {
    const remainingTasks = tasks.filter(t => t.id !== id);
    setTasks([...remainingTasks]);
    setFilteredTasks([...remainingTasks]);
  };

  const handleChangeStatus = (id) => {
    const modifiedTasks = tasks.map(t =>
      t.id === id ?
        { ...t, isCompleted: !t.isCompleted }
        :
        t
    );
    setTasks([...modifiedTasks]);
    setFilteredTasks([...modifiedTasks]);
  }

  const handleSearchQuery = (query) =>{
    setSearchQuery(query);
    const queryResult = tasks.filter(t => t.description.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    setFilteredTasks(queryResult);
  }

useEffect(() => {
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  return (
    <>
      <h1> LISTA DE TAREAS </h1>
      <TaskForm onAddTask={(description) => handleAddTask(description)} />
      <Search onSearch={query => handleSearchQuery(query)} />
      <TaskList
        onDeleteTask={(id) => handleDelete(id)} tasks={filteredTasks}
        onChangeStatus={(id) => handleChangeStatus(id)}
      />
    </>
  );
}


export default App;
