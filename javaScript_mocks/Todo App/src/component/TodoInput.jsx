import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodoFun } from "../redux/action";

const TodoInput = () => {

    const dispatch=useDispatch()

  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="type here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={()=>dispatch(AddTodoFun(value))}>ADD</button>
    </div>
  );
};

export default TodoInput;
