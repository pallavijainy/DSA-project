import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodoFun, DeleteTodoFun, UpdateTodoFun } from "../redux/action";

const TodoItem = ({ id, name, isCompleted }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");

const editHandle=()=>{
  dispatch(UpdateTodoFun(id,{name:value}))
  setEdit(!edit)
}

  // console.log(id)
  const dispatch = useDispatch();

  return (
    <div key={id} style={{border:"1px solid white"}}>
      <h1 key={id}>{id}</h1>

      <button onClick={() => dispatch(DeleteTodoFun(id))}>delete</button>
      {edit ? (
        <>
          <input
            placeholder="write here"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {/* <button onClick={() =>editHandle()}>add</button> */}
        </>
      ) : (
        <>
          <h1
            onClick={() => {
              dispatch(UpdateTodoFun(id, { isCompleted: !isCompleted }));
            }}
          >
            {name}-{isCompleted ? "COMPLETED" : "not completed"}
          </h1>
        </>
      )}
      <button onClick={()=>editHandle(value)}>EDIT</button>
    </div>
  );
};

export default TodoItem;
