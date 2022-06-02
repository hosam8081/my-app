import React from 'react'
import Task from './Task'
const Tasks = ({tasks, deleteTask, ToggleRemind}) => {
  return (
    <>
      {tasks.map(task => <Task key={task.id} task={task} deleteTask={deleteTask} ToggleRemind={ToggleRemind}/>)}
    </>
  )
}

export default Tasks