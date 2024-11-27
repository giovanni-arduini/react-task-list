import "./App.css";
import { tasks } from "../data/tasks";

function App() {
  const completed = tasks.filter((task) => task.state === "completed");
  const todo = tasks.filter((task) => !(task.state === "completed"));

  return (
    <div>
      <h1 className="main-title">Task Manager</h1>
      <ul>
        <h2>Current tasks ({todo.length})</h2>
        {todo.map((task, i) => (
          <li key={task.id}>
            <div style={{ fontWeight: "bold" }}>{task.title}</div>
            <div>Priority: {task.priority}</div>
            <div>Est. time: {task.estimatedTime}</div>
          </li>
        ))}
      </ul>
      <hr></hr>
      <ul>
        <h2>Completed tasks ({completed.length})</h2>
        {completed.map((task, i) => (
          <li key={task.id}>
            <div style={{ fontWeight: "bold" }}>{task.title}</div>
            <div>Priority: {task.priority}</div>
            <div>Est. time: {task.estimatedTime}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
