import { useState } from "react";
import "./App.css";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleInputChanger = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    setTodoList([...todoList, newTask]);
  };
  const deleteTask = (taskName) => {
    const newTaskList = todoList.filter((task) =>
      task === taskName ? false : true
    );
    setTodoList(newTaskList);
  };
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleInputChanger} placeholder="Add item..." />
        <button className="task-button" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="list">
        {todoList.map((task, key) => {
          return (
            <div className="down">
              <h1 style={{ color: "white" }}>{task}</h1>
              <button
                className="delete-button"
                onClick={() => deleteTask(task)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
