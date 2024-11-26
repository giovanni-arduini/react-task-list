import "./App.css";
import { tasks } from "../data/tasks";

function App() {
  const completed = tasks.filter((task) => task.state === "completed");
  const todo = tasks.filter((task) => !(task.state === "completed"));

  return (
    <div>
      {tasks.length}

      <ul>
        {todo.map((task, i) => (
          <li key={task.id}>
            <div style={{ fontWeight: "bold" }}>{task.title}</div>
            <div>Priority: {task.priority}</div>
            <div>Est. time: {task.estimatedTime}</div>
          </li>
        ))}
      </ul>

      <ul>
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
