import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, getTask } from "../Redux/Taskreducer/actionTypes";

const Task = () => {
  let use = localStorage.getItem("taskm");
  const tasks = useSelector((state) => state.Taskreducer.data);
  const task = useSelector((state) =>
    state.Taskreducer.data.filter((task) => task.use === use)
  );
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [taskList, setTaskList] = useState(tasks);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [tasksForDay, setTasksForDay] = useState([]);

  console.log(use);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title !== "" && tasksForDay.length < 5) {
      dispatch(addTask({ title, date, use }));
      setTitle("");
      setTasksForDay([...tasksForDay, { title }]);
    }
    if (tasksForDay.length === 5) {
      alert("Daily limit exceeded");
    }
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  useEffect(() => {
    setTaskList(tasks);
    setTasksForDay(tasks.filter((task) => task.date === date));
  }, [tasks, date]);
  if (task.length > 0) {
    console.log(task);
  }
  return (
    <div>
      <h1>hi:-{use}</h1>
      <h1>Task List:</h1>
      <p>Date: {date}</p>
      <p>Total no of tasks: {taskList.length}</p>
      <p>Tasks for the day:</p>
      {}
      <ul>
        {tasksForDay.map((task, index) => (
          <li key={index}>{task.title}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Add a task:
          <input type="text" value={title} onChange={handleChange} />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Task;
