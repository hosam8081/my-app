import React from "react";
import Button from "./Button";

const Task = ({ task, deleteTask, ToggleRemind }) => {
  return (
    <div
      className={
        task.reminder
          ? "bg-gray mt-4 p-3 border-l-4 border-menu"
          : "bg-gray mt-4 p-3"
      }
      onDoubleClick={() => ToggleRemind(task.id)}
    >
      <h3 className="flex justify-between">
        {task.text}
        <Button
          text="x"
          style="text-menu text-lg font-bold"
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p className="text-muted">{task.day}</p>
    </div>
  );
};

export default Task;
