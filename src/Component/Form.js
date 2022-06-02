import React, { useState } from "react";

const Form = ({addTask}) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [isRemind, setRemind] = useState(false);
  let onAdd = (e) => {
    e.preventDefault();
    addTask({text, day, id:Math.random() * 10, reminder:isRemind});
    /* clear input */
    setText("")
    setDay("")
  }
  return (
    <form onSubmit={(e) => onAdd(e)}>
      <div>
        <input
          type="text"
          placeholder="todo"
          className="w-full mt-4 p-2 border-2 border-muted rounded-sm"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="day"
          className="w-full mt-4 p-2 border-2 border-muted rounded-sm"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div>
        <label className="pr-4">set reminder</label>
        <input
          type="checkbox"
          placeholder="day"
          className="pl-4 mt-4 p-2 border-2 border-muted rounded-sm"
          value={isRemind}
          onChange={(e) => setRemind(e.target.checked)}
        />
      </div>
      <div>
        <input
          type="submit"
          className="w-full mt-4 p-2 border-2 border-muted bg-menu text-white border-0 rounded-sm"
        />
      </div>
    </form>
  );
};

export default Form;
