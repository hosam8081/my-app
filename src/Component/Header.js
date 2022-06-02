import React from "react";
import Button from "./Button";
const Header = () => {
  let addTask = () => {
    console.log("add")
  }
  return (
    <header>
      <div className='p-4 '>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">taskbar</h1>
          <Button text="Add Task" style={'bg-menu text-white p-2 rounded-md'} onClick={addTask}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
