import React, { useState } from "react";
import Header from "./Component/Header";
import Tasks from "./Component/Tasks";
import Form from "./Component/Form";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "learn redux", day: "10", reminder:false },
    { id: 2, text: "learn tailwind", day: "10", reminder:false },
    { id: 3, text: "do E-commerce", day: "10", reminder:false },
    { id: 4, text: "woek", day: "10", reminder:false },
  ]);

  let deleteTask = (id) => {
    let newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  };

  let addTask = (item) => {
    setTasks([...tasks, item])
  }

  let ToggleRemind = (id) => {
    let newTask = tasks.map(task => task.id == id ? {...task, reminder:!task.reminder}: task)
    setTasks(newTask)
  }
  return (
    <div className="container mx-auto px-4 py-5">
      <div className="border-2 p-4 py-4 border-menu">
        <Header />
        <Form addTask={addTask}/>
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} deleteTask={deleteTask} ToggleRemind={ToggleRemind} />
        ) : (
          <div className="mt-4">there is no tasks</div>
        )}
      </div>
    </div>
  );
}

export default App;
